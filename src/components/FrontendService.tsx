import "./FrontendService.css";
import { FaWhatsapp } from "react-icons/fa";

const FrontendService = () => {
  return (
    <section className="frontend-service">
      <div className="service-header">
  <span>PROFESSIONAL FRONTEND DEVELOPMENT</span>

  <h1>Modern Websites That Drive Results</h1>

  <p>
    Transform your ideas into high-performing, responsive, and visually
    engaging websites built with modern technologies. Whether you're a
    startup, business owner, freelancer, or personal brand, I create
    websites that not only look great but also deliver an exceptional user
    experience across all devices.
  </p>

  <p>
    From landing pages and portfolio websites to business websites and
    scalable web applications, every project is developed with clean code,
    optimized performance, and a strong focus on usability. My goal is to
    help you establish a professional online presence that attracts visitors
    and converts them into customers.
  </p>
</div>

<div className="why-choose-us">
  <h2>Why Choose Me?</h2>

  <div className="why-grid">
    <div className="why-card">
      <h3>Modern Tech Stack</h3>
      <p>
        Websites built using React, TypeScript, JavaScript, HTML5, and CSS3
        following industry best practices.
      </p>
    </div>

    <div className="why-card">
      <h3>Responsive Design</h3>
      <p>
        Seamless experience across desktops, tablets, and mobile devices for
        maximum reach and engagement.
      </p>
    </div>

    <div className="why-card">
      <h3>Client-Centric Approach</h3>
      <p>
        Every website is tailored to your business goals, target audience,
        and branding requirements.
      </p>
    </div>
  </div>
</div>

      <div className="pricing-table-wrapper">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Package Name</td>
              <td>Starter Website</td>
              <td>Business Website</td>
              <td>Professional Website</td>
            </tr>

            <tr>
              <td>Price</td>
              <td>₹7,999</td>
              <td>₹9,499</td>
              <td>₹11,499</td>
            </tr>

            <tr>
              <td>Pages</td>
              <td>1</td>
              <td>5</td>
              <td>10</td>
            </tr>

            <tr>
              <td>Responsive Design</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>

            <tr>
              <td>Content Upload</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>

            <tr>
              <td>Plugins</td>
              <td>1</td>
              <td>3</td>
              <td>7</td>
            </tr>

            <tr>
              <td>E-commerce Support</td>
              <td>✗</td>
              <td>✓</td>
              <td>✓</td>
            </tr>

            <tr>
              <td>Speed Optimization</td>
              <td>✗</td>
              <td>✓</td>
              <td>✓</td>
            </tr>

            <tr>
              <td>Hosting Setup</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>

            <tr>
              <td>Revisions</td>
              <td>3</td>
              <td>5</td>
              <td>Unlimited</td>
            </tr>

            <tr>
              <td>Delivery</td>
              <td>2 Days</td>
              <td>4 Days</td>
              <td>6 Days</td>
            </tr>
          </tbody>
        </table>
      </div>


<button
  className="order-btn"
  onClick={() =>
    window.open(
      "https://wa.me/919113770945?text=Hi%20Harshita,%20I'm%20interested%20in%20your%20services.",
      "_blank"
    )
  }
>
  <FaWhatsapp /> Order Now
</button>
    </section>
  );
};

export default FrontendService;