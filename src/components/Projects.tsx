import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "./data/Project";
import "./Project.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>
        <span>Projects</span>
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          scale: 0.9,
          slideShadows: false,
        }}
        className="projects-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
              <img src={project.image} alt={project.title} />

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;