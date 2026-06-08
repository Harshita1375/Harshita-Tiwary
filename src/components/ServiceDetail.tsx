import "./ServiceDetail.css";

const FrontendService = () => {
  return (
    <section className="service-detail">

      <h1>Frontend Development</h1>
      <p>
        Professional React and responsive website development for
        startups, businesses and personal brands.
      </p>

      <div className="packages">

        <div className="package-card">
          <h3>Basic</h3>
          <h2>₹7,999</h2>
          <p>Starter Website</p>

          <ul>
            <li>1 Page Website</li>
            <li>Responsive Design</li>
            <li>Contact Form</li>
            <li>3 Revisions</li>
            <li>2 Day Delivery</li>
          </ul>

          <button>Order Now</button>
        </div>

        <div className="package-card featured">
          <h3>Standard</h3>
          <h2>₹9,499</h2>
          <p>Business Website</p>

          <ul>
            <li>5 Pages</li>
            <li>Responsive Design</li>
            <li>Hosting Setup</li>
            <li>3 Plugins</li>
            <li>5 Revisions</li>
          </ul>

          <button>Order Now</button>
        </div>

        <div className="package-card">
          <h3>Premium</h3>
          <h2>₹11,499</h2>
          <p>Professional Website</p>

          <ul>
            <li>10 Pages</li>
            <li>E-Commerce Support</li>
            <li>7 Plugins</li>
            <li>Speed Optimization</li>
            <li>Unlimited Revisions</li>
          </ul>

          <button>Order Now</button>
        </div>

      </div>
    </section>
  );
};

export default FrontendService;