function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        KT<span>.</span>
      </a>

      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-contact">
        Let's Talk
      </a>
    </header>
  );
}

export default Navbar;
