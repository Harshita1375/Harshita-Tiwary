import "./FrontendService.css";
import { FaWhatsapp } from "react-icons/fa";
const FrontendService = () => {
  return (
    <section className="FullStack-service">
        <div className="service-header">
  <span>DATA ANALYTICS & BUSINESS INTELLIGENCE</span>

  <h1>Transform Raw Data Into Actionable Insights</h1>

  <p>
    Make smarter business decisions with powerful dashboards, reports, and
    data-driven insights. I help businesses, startups, researchers, and
    students analyze complex datasets and transform them into meaningful
    visualizations that support strategic decision-making.
  </p>

  <p>
    From interactive Power BI dashboards and SQL analysis to Excel reporting
    and KPI tracking, I deliver solutions that uncover trends, identify
    opportunities, and improve operational efficiency. Services are ideal
    for business reporting, academic projects, market research, and data
    visualization requirements.
  </p>
</div>
<div className="why-choose-us">
  <h2>Why Choose Me?</h2>

  <div className="why-grid">

    <div className="why-card">
      <h3>Interactive Dashboards</h3>
      <p>
        Create visually appealing Power BI dashboards with drill-down
        capabilities and real-time insights.
      </p>
    </div>

    <div className="why-card">
      <h3>SQL Expertise</h3>
      <p>
        Data extraction, transformation, optimization, and analytical
        queries for meaningful business insights.
      </p>
    </div>

    <div className="why-card">
      <h3>Business Intelligence</h3>
      <p>
        KPI tracking, performance monitoring, and executive reporting for
        better decision-making.
      </p>
    </div>

    <div className="why-card">
      <h3>Data Cleaning</h3>
      <p>
        Prepare and clean messy datasets to ensure accurate reporting and
        analysis.
      </p>
    </div>

    <div className="why-card">
      <h3>Academic Projects</h3>
      <p>
        Complete support for college major and minor projects involving data
        analytics, visualization, and reporting.
      </p>
    </div>

    <div className="why-card">
      <h3>Professional Reporting</h3>
      <p>
        Create executive summaries, analytical reports, and business
        presentations with actionable insights.
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
        <td>Data Report</td>
        <td>Business Dashboard</td>
        <td>Advanced Analytics Suite</td>
      </tr>

      <tr>
        <td>Price</td>
        <td>₹3,999</td>
        <td>₹7,999</td>
        <td>₹14,999</td>
      </tr>

      <tr>
        <td>Data Cleaning</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
      </tr>

      <tr>
        <td>Excel Analysis</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
      </tr>

      <tr>
        <td>SQL Analysis</td>
        <td>Basic</td>
        <td>Advanced</td>
        <td>Advanced + Optimization</td>
      </tr>

      <tr>
        <td>Power BI Dashboard</td>
        <td>1 Page</td>
        <td>3 Pages</td>
        <td>5+ Interactive Pages</td>
      </tr>

      <tr>
        <td>KPI Tracking</td>
        <td>3 KPIs</td>
        <td>10 KPIs</td>
        <td>Unlimited KPIs</td>
      </tr>

      <tr>
        <td>Data Visualization</td>
        <td>Basic Charts</td>
        <td>Interactive Charts</td>
        <td>Advanced Visualizations</td>
      </tr>

      <tr>
        <td>Business Report</td>
        <td>✓</td>
        <td>✓</td>
        <td>Detailed Insights Report</td>
      </tr>

      <tr>
        <td>Revisions</td>
        <td>2</td>
        <td>5</td>
        <td>Unlimited</td>
      </tr>

      <tr>
        <td>Delivery</td>
        <td>2 Days</td>
        <td>4 Days</td>
        <td>7 Days</td>
      </tr>

    </tbody>
  </table>
</div>
<div className="tech-section">
  <h2>Tools & Technologies</h2>

  <div className="tech-stack">
    <span>Power BI</span>
    <span>SQL</span>
    <span>MySQL</span>
    <span>Excel</span>
    <span>Google Sheets</span>
    <span>Python</span>
    <span>Pandas</span>
    <span>NumPy</span>
    <span>Matplotlib</span>
    <span>Seaborn</span>
    <span>Power Query</span>
    <span>Data Visualization</span>
    <span>Business Intelligence</span>
    <span>KPI Reporting</span>
  </div>
</div>
<div className="cta-section">
  <h2>Ready to Turn Data Into Insights?</h2>

  <p>
    Get professional dashboards, reports, and analytics solutions tailored
    to your business or academic requirements.
  </p>

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
</div>
</section>
  );
};

export default FrontendService;