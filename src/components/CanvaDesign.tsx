import "./FrontendService.css";

const FrontendService = () => {
  return (
    <section className="FullStack-service">
      <div className="service-header">
        <span>CANVA DESIGN SERVICES</span>

        <h1>Professional Designs That Capture Attention</h1>

        <p>
          Elevate your brand with visually stunning and professionally crafted
          Canva designs. Whether you need social media posts, presentations,
          resumes, business flyers, posters, marketing materials, or personal
          branding assets, I create designs that are modern, engaging, and
          tailored to your goals.
        </p>

        <p>
          From startups and small businesses to students and content creators,
          I help transform ideas into impactful visual content that strengthens
          brand identity and improves audience engagement.
        </p>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Me?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Modern Design Aesthetics</h3>
            <p>
              Clean, professional, and visually appealing designs aligned with
              current design trends.
            </p>
          </div>

          <div className="why-card">
            <h3>Brand Consistency</h3>
            <p>
              Designs that maintain a consistent visual identity across all
              platforms and marketing materials.
            </p>
          </div>

          <div className="why-card">
            <h3>Social Media Ready</h3>
            <p>
              Optimized designs for Instagram, LinkedIn, Facebook, YouTube,
              Pinterest, and other platforms.
            </p>
          </div>

          <div className="why-card">
            <h3>Presentation Design</h3>
            <p>
              Professional pitch decks, project presentations, and business
              proposals with engaging layouts.
            </p>
          </div>

          <div className="why-card">
            <h3>Academic & Professional Projects</h3>
            <p>
              Posters, resumes, certificates, reports, and project presentations
              designed for students and professionals.
            </p>
          </div>

          <div className="why-card">
            <h3>Quick Turnaround</h3>
            <p>
              Fast delivery with revisions to ensure the final design matches
              your expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="pricing-table-wrapper">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>BASIC</th>
              <th>STANDARD</th>
              <th>PREMIUM</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Package Name</td>
              <td>Starter Creative</td>
              <td>Brand Growth Pack</td>
              <td>Complete Brand Kit</td>
            </tr>

            <tr>
              <td>Description</td>
              <td>
                1 custom Canva design for posters, promotions, or social media.
              </td>
              <td>
                5 branded Canva designs for marketing, events, and social media.
              </td>
              <td>
                15 custom Canva designs with unlimited revisions for 1 week and priority support.
              </td>
            </tr>

            <tr>
              <td>Delivery Time</td>
              <td>1 DAY DELIVERY</td>
              <td>2 DAYS DELIVERY</td>
              <td>6 DAYS DELIVERY</td>
            </tr>

            <tr>
              <td>Revisions</td>
              <td>2</td>
              <td>5</td>
              <td>UNLIMITED</td>
            </tr>

            <tr>
              <td>Number of platforms</td>
              <td>2</td>
              <td>3</td>
              <td>5</td>
            </tr>

            <tr>
              <td>Source file</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>

            <tr>
              <td>Commercial use</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>

            <tr>
              <td>Price</td>
              <td>₹499</td>
              <td>₹1,299</td>
              <td>₹2,499</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tech-section">
        <h2>Design Solutions</h2>

        <div className="tech-stack">
          <span>Canva</span>
          <span>Instagram Posts</span>
          <span>LinkedIn Posts</span>
          <span>Presentation Design</span>
          <span>Pitch Decks</span>
          <span>Resume Design</span>
          <span>Flyers</span>
          <span>Brochures</span>
          <span>Posters</span>
          <span>Certificates</span>
          <span>Business Cards</span>
          <span>Brand Templates</span>
          <span>YouTube Thumbnails</span>
          <span>Marketing Materials</span>
        </div>
      </div>

      <div className="cta-section">
        <h2>Need Professional Canva Designs?</h2>

        <p>
          Get eye-catching and high-quality designs for your business, personal
          brand, social media, or academic projects.
        </p>

        <button>Order Now</button>
      </div>
    </section>
  );
};

export default FrontendService;