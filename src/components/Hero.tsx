import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">Available for Freelance Projects</p>

        <h1>
          Hi, I'm <span>Harshita Tiwary</span>
        </h1>

        <h2>Full Stack Developer & Graphic Designer</h2>

        <p className="hero-description">
          I help businesses establish a strong online presence through
          responsive websites, landing pages, Canva creatives, and
          digital solutions that convert visitors into customers.
        </p>

        <div className="hero-buttons">
          <div className="hero-buttons">
  <a
    className="primary-btn"
    href="mailto:harshita75tiwary@gmail.com?subject=Hiring Inquiry"
  >
    Hire Me
  </a>

  <a className="secondary-btn" href="#projects">
    View Projects
  </a>
</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;