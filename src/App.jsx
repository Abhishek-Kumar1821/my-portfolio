import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]; // FIXED
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="nav">
        <h2 className="logo">Abhishek Kumar</h2>
        <ul>
          <li className={active === "home" ? "active" : ""}><a href="#home">Home</a></li>
          <li className={active === "about" ? "active" : ""}><a href="#about">About</a></li>
          <li className={active === "skills" ? "active" : ""}><a href="#skills">Skills</a></li>
          <li className={active === "projects" ? "active" : ""}><a href="#projects">Projects</a></li>
          <li className={active === "contact" ? "active" : ""}><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="text">
            <h1>Hi, I'm <span>Abhishek</span> 👋</h1>
            <p>BCA Student | Web Developer</p>

            <a href="/abhishek-resume.pdf" download>
              <button className="btn">Download Resume</button>
            </a>
          </div>

          <div className="image">
            <img src="/profile.jpg" alt="profile" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a BCA student and aspiring web developer with a passion for creating
          modern and responsive web applications. I enjoy working with React,
          JavaScript, and building user-friendly interfaces.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h2>My Skills</h2>

        <div className="skill">
          <p>HTML</p>
          <div className="bar"><span style={{width: "90%"}}></span></div>
        </div>

        <div className="skill">
          <p>CSS</p>
          <div className="bar"><span style={{width: "85%"}}></span></div>
        </div>

        <div className="skill">
          <p>JavaScript</p>
          <div className="bar"><span style={{width: "75%"}}></span></div>
        </div>

        <div className="skill">
          <p>React</p>
          <div className="bar"><span style={{width: "70%"}}></span></div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>

        <div className="project-grid">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>React based portfolio website</p>
            <a href="#">Live</a> | <a href="#">GitHub</a>
          </div>

          <div className="card">
            <h3>Calculator App</h3>
            <p>JavaScript calculator project</p>
            <a href="#">Live</a> | <a href="#">GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Email: abhishekhjp1821@email.com</p>
        <p>Phone: 8757608566</p>
        <p>GitHub: <a href="https://github.com/Abhishek-Kumar1821">Profile</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Abhishek | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;