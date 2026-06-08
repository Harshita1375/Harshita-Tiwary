import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Frontend Development",
    subtitle: "Modern React Websites",
    path: "/frontend-service",
  },
  {
    title: "Full Stack Development",
    subtitle: "Complete Web Applications",
    path: "/fullstack-service",
  },
  {
    title: "Data Analytics",
    subtitle: "Power BI & SQL Dashboards",
    path: "/data-analytics",
  },
  {
    title: "Canvas Design",
    subtitle: "Social Media & Marketing Graphics",
    path: "/canva-design",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span>WHAT I DO</span>
        <h2>Services</h2>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <Link
            to={service.path}
            className="service-item"
            key={index}
          >
            <FaChevronRight className="service-arrow" />

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;