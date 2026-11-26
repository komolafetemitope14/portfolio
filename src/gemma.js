import { pipeline } from "@huggingface/transformers";

const MODEL_ID = "onnx-community/gemma-3-1b-it-ONNX";

let generator = null;
let loadingPromise = null;

export function supportsWebGPU() {
  return typeof navigator !== "undefined" && "gpu" in navigator;
}

export async function loadGemma(onProgress) {
  if (generator) {
    return generator;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  if (!supportsWebGPU()) {
    throw new Error(
      "WebGPU is not available in this browser."
    );
  }

  loadingPromise = pipeline(
    "text-generation",
    MODEL_ID,
    {
      device: "webgpu",
      dtype: "q4f16",

      progress_callback: (progress) => {
        if (onProgress) {
          onProgress(progress);
        }
      },
    }
  );

  try {
    generator = await loadingPromise;
    return generator;
  } catch (error) {
    generator = null;
    throw error;
  } finally {
    loadingPromise = null;
  }
}

export async function askGemma(question, onProgress) {
  const pipe = await loadGemma(onProgress);

  const messages = [
    {
      role: "system",
      content:
        "You are Ask KT Portfolio Assistant, a friendly AI assistant on Temitope's professional portfolio website. Answer general questions clearly, naturally, and concisely. You can help with technology, Linux, AWS, cloud computing, DevOps, infrastructure, programming, careers, general knowledge, and other normal assistant questions. Do not claim to know private or personal facts about Temitope. Never invent personal information about Temitope.",
    },
    {
      role: "user",
      content: question,
    },
  ];

  const output = await pipe(messages, {
    max_new_tokens: 200,
    do_sample: false,
  });

  const generatedText = output?.[0]?.generated_text;

  if (Array.isArray(generatedText)) {
    const assistantMessage = generatedText
      .filter((message) => message.role === "assistant")
      .at(-1);

    if (assistantMessage?.content) {
      return assistantMessage.content.trim();
    }
  }

  if (typeof generatedText === "string") {
    return generatedText.trim();
  }

  throw new Error(
    "Ask KT Portfolio Assistant could not generate a response."
  );
}
