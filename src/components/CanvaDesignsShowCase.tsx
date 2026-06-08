import EarringsImg from "./data/Earrings.png";
import "./CanvaDesigns.css";

const designs = [
  {
    title: "Instagram Post Design",
    category: "Social Media",
    image: EarringsImg,
    link: "https://canva.link/ze5d1cjlad6dylv"
  },
];

const CanvaDesigns = () => {
  return (
    <section className="canva-section" id="canva-designs">
      <div className="canva-header">
        <span>CREATIVE WORK</span>
        <h2>Canva Design Portfolio</h2>
        <p>
          Professional designs crafted for businesses, students, startups,
          and personal brands. From social media content to presentations
          and marketing materials.
        </p>
      </div>

      <div className="design-grid">
        {designs.map((design, index) => (
          <a 
            href={design.link} 
            target="_blank" 
            rel="noreferrer" 
            className="design-card" 
            key={index}
          >
            <img src={design.image} alt={design.title} />

            <div className="design-overlay">
              <span>{design.category}</span>
              <h3>{design.title}</h3>
              <span className="view-link-btn">View Template →</span>
            </div>
          </a>
        ))}
    
      </div>
    </section>
  );
};

export default CanvaDesigns;