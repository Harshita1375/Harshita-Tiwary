import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">Available for Freelance Projects</p>

        <h1>
          Hi, I'm <span>Harshita Tiwary</span>
        </h1>

        <h2>Web Designer & React Developer</h2>

        <p className="hero-description">
          I help businesses establish a strong online presence through
          responsive websites, landing pages, Canva creatives, and
          digital solutions that convert visitors into customers.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Hire Me</button>
          <button className="secondary-btn">View Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;