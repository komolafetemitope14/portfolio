import { useEffect, useRef, useState } from "react";
import { chatData } from "../data/chatData";
import { askGemma, supportsWebGPU } from "../gemma";
import "./ChatBot.css";

const welcomeMessage = {
  sender: "bot",
  text: "👋 Hey! I'm Ask KT Portfolio Assistant. Ask me about the fun stuff about Tope you probably won't find on Google 😄 — or ask me anything else, just like you would with any other AI assistant. 🤖",
};

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshteinDistance(first, second) {
  const a = normalizeText(first);
  const b = normalizeText(second);

  const matrix = Array.from(
    { length: b.length + 1 },
    () => Array(a.length + 1).fill(0)
  );

  for (let i = 0; i <= b.length; i += 1) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= a.length; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      const cost =
        b[i - 1] === a[j - 1] ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
}

function similarity(first, second) {
  const a = normalizeText(first);
  const b = normalizeText(second);

  if (!a || !b) {
    return 0;
  }

  if (a === b) {
    return 1;
  }

  const longestLength = Math.max(
    a.length,
    b.length
  );

  const distance = levenshteinDistance(a, b);

  return 1 - distance / longestLength;
}

function findPredefinedAnswer(input) {
  const normalizedInput = normalizeText(input);

  if (!normalizedInput) {
    return null;
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const item of chatData) {
    for (const question of item.questions) {
      const normalizedQuestion =
        normalizeText(question);

      if (normalizedInput === normalizedQuestion) {
        return item;
      }

      if (
        normalizedQuestion.length >= 5 &&
        normalizedInput.includes(normalizedQuestion)
      ) {
        return item;
      }

      const score = similarity(
        normalizedInput,
        normalizedQuestion
      );

      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    }
  }

  if (bestScore >= 0.7) {
    return bestMatch;
  }

  return null;
}

function isUnknownPersonalQuestion(input) {
  const text = normalizeText(input);

  const personWords = [
    "tope",
    "temitope",
    "komolafe",
    "enianyole",
  ];

  const personalWords = [
    "address",
    "home address",
    "house",
    "password",
    "salary",
    "income",
    "bank",
    "account",
    "girlfriend",
    "wife",
    "partner",
    "family",
    "parents",
    "mother",
    "father",
    "siblings",
    "birthday",
    "date of birth",
    "age",
    "private",
    "secret",
  ];

  const mentionsTope = personWords.some(
    (word) => text.includes(word)
  );

  const asksPersonalFact = personalWords.some(
    (word) => text.includes(word)
  );

  return mentionsTope && asksPersonalFact;
}

function getErrorMessage(error) {
  if (!error) {
    return "Unknown error";
  }

  if (typeof error === "string") {
    return error;
  }

  if (error.message) {
    return error.message;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    welcomeMessage,
  ]);

  const [isTyping, setIsTyping] =
    useState(false);

  const [aiStatus, setAiStatus] =
    useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [
    messages,
    isOpen,
    isTyping,
    aiStatus,
  ]);

  function wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

  async function typeBotMessage(message) {
    setIsTyping(true);

    await wait(350);

    setIsTyping(false);

    const words = message.text.split(/\s+/);

    let botMessageIndex = null;

    setMessages((currentMessages) => {
      botMessageIndex = currentMessages.length;

      return [
        ...currentMessages,
        {
          sender: "bot",
          text: "",
          link: null,
          linkLabel: null,
          isStreaming: true,
        },
      ];
    });

    await wait(10);

    for (
      let index = 0;
      index < words.length;
      index += 1
    ) {
      const currentText = words
        .slice(0, index + 1)
        .join(" ");

      setMessages((currentMessages) =>
        currentMessages.map(
          (currentMessage, currentIndex) => {
            if (
              currentIndex !== botMessageIndex
            ) {
              return currentMessage;
            }

            return {
              ...currentMessage,
              text: currentText,
            };
          }
        )
      );

      await wait(45);
    }

    setMessages((currentMessages) =>
      currentMessages.map(
        (currentMessage, currentIndex) => {
          if (
            currentIndex !== botMessageIndex
          ) {
            return currentMessage;
          }

          return {
            ...currentMessage,
            text: message.text,
            link: message.link,
            linkLabel: message.linkLabel,
            isStreaming: false,
          };
        }
      )
    );
  }

  function getProgressMessage(progress) {
    if (!progress) {
      return "Preparing AI...";
    }

    if (
      progress.status === "progress" &&
      typeof progress.progress === "number"
    ) {
      return `Loading AI model... ${Math.round(
        progress.progress
      )}%`;
    }

    if (progress.status === "ready") {
      return "AI model ready...";
    }

    return "Loading AI model...";
  }

  async function handleGeneralQuestion(question) {
    if (!supportsWebGPU()) {
      await typeBotMessage({
        sender: "bot",
        text: "⚠️ GEMMA DEBUG: WebGPU is not available in this browser. This means the browser cannot currently run the Gemma AI model.",
      });

      return;
    }

    try {
      setAiStatus(
        "Loading Gemma AI model for the first time..."
      );

      const response = await askGemma(
        question,
        (progress) => {
          setAiStatus(
            getProgressMessage(progress)
          );
        }
      );

      setAiStatus("");

      await typeBotMessage({
        sender: "bot",
        text: response,
      });
    } catch (error) {
      console.error("Gemma error:", error);

      setAiStatus("");

      const errorMessage =
        getErrorMessage(error);

      await typeBotMessage({
        sender: "bot",
        text: `⚠️ GEMMA DEBUG ERROR: ${errorMessage}`,
      });
    }
  }

  async function addQuestion(question) {
    const trimmedQuestion = question.trim();

    if (
      !trimmedQuestion ||
      isTyping ||
      aiStatus
    ) {
      return;
    }

    const userMessage = {
      sender: "user",
      text: trimmedQuestion,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setInput("");

    const match =
      findPredefinedAnswer(trimmedQuestion);

    if (match) {
      await typeBotMessage({
        sender: "bot",
        text: match.answer,
        link: match.link,
        linkLabel: match.linkLabel,
      });

      return;
    }

    if (
      isUnknownPersonalQuestion(
        trimmedQuestion
      )
    ) {
      await typeBotMessage({
        sender: "bot",
        text: "🤫 I don't have verified information about that part of Tope's personal life, so I won't make up an answer. You can ask me something else about him or ask me a general question.",
      });

      return;
    }

    await handleGeneralQuestion(
      trimmedQuestion
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !input.trim() ||
      isTyping ||
      aiStatus
    ) {
      return;
    }

    addQuestion(input);
  }

  const assistantBusy =
    isTyping || Boolean(aiStatus);

  return (
    <div className="kt-chatbot">
      {isOpen && (
        <div
          className="kt-chat-window"
          role="dialog"
          aria-label="Ask KT Portfolio Assistant"
        >
          <div className="kt-chat-header">
            <div>
              <div className="kt-chat-title-row">
                <span className="kt-chat-status"></span>

                <h3>
                  Ask KT Portfolio Assistant
                </h3>
              </div>

              <p>
                Tope's insider + your AI assistant ✨
              </p>
            </div>

            <button
              type="button"
              className="kt-chat-close"
              onClick={() =>
                setIsOpen(false)
              }
              aria-label="Close Ask KT Portfolio Assistant"
            >
              ×
            </button>
          </div>

          <div className="kt-chat-messages">
            {messages.map(
              (message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`kt-message kt-message-${message.sender}`}
                >
                  <div className="kt-message-bubble">
                    {message.text
                      .split("\n")
                      .map(
                        (
                          line,
                          lineIndex
                        ) => (
                          <span
                            key={`${line}-${lineIndex}`}
                          >
                            {line}

                            {lineIndex <
                              message.text.split(
                                "\n"
                              ).length -
                                1 && <br />}
                          </span>
                        )
                      )}

                    {message.isStreaming && (
                      <span className="kt-typing-cursor">
                        {" "}
                        ▌
                      </span>
                    )}

                    {message.link && (
                      <a
                        href={message.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="kt-chat-link"
                      >
                        {message.linkLabel ||
                          "Open link ↗"}
                      </a>
                    )}
                  </div>
                </div>
              )
            )}

            {aiStatus && (
              <div className="kt-message kt-message-bot">
                <div className="kt-message-bubble">
                  🤖 {aiStatus}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="kt-message kt-message-bot">
                <div className="kt-message-bubble">
                  Ask KT is typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          <form
            className="kt-chat-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder={
                aiStatus
                  ? "AI is loading..."
                  : isTyping
                    ? "Ask KT is responding..."
                    : "Ask me anything..."
              }
              aria-label="Ask KT Portfolio Assistant"
              autoComplete="off"
              disabled={assistantBusy}
            />

            <button
              type="submit"
              className="kt-chat-send"
              aria-label="Send message"
              disabled={
                !input.trim() ||
                assistantBusy
              }
            >
              ↑
            </button>
          </form>

          <div className="kt-chat-footer">
            <span>KT</span> Portfolio Assistant
          </div>
        </div>
      )}

      <button
        type="button"
        className={`kt-chat-launcher ${
          isOpen
            ? "kt-chat-launcher-open"
            : ""
        }`}
        onClick={() =>
          setIsOpen(
            (currentState) =>
              !currentState
          )
        }
        aria-label={
          isOpen
            ? "Close Ask KT Portfolio Assistant"
            : "Open Ask KT Portfolio Assistant"
        }
      >
        {isOpen ? (
          <span className="kt-launcher-close">
            ×
          </span>
        ) : (
          <>
            <span className="kt-launcher-icon">
              ✦
            </span>

            <span className="kt-launcher-text">
              Ask KT Portfolio Assistant
            </span>
          </>
        )}
      </button>
    </div>
  );
}

export default ChatBot;
