
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import OpenSource from "./sections/OpenSource";
import Blog from "./sections/Blog";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Projects />
        <OpenSource />
        <Blog />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <ChatBot />
    </>
  );
}

export default App;

