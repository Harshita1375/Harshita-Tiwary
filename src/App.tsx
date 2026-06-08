import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FrontendService from "./components/FrontendService"; 
import FullStackService from "./components/FullStackService";
import DataAnalytics from "./components/DataAnalytics";
import CanvaDesign from "./components/CanvaDesign";
import CanvaDesigns from "./components/CanvaDesignsShowCase";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground"; 
import SocialSidebar from "./components/SocialSidebar";
import "./index.css"; 

// Sub-component wrapper to automatically run animation resets whenever route paths shift
const ScrollRevealManager = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05, 
    };

    const handleScrollReveal = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollReveal, observerOptions);

    // Timeout allows the virtual router tree to fully mount DOM nodes before observing them
    const timer = setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll(
        ".service-header, .why-card, .project-card, .design-card, .contact-form, .tech-section, .pricing-table-wrapper"
      );

      elementsToAnimate.forEach((el) => {
        el.classList.add("reveal-hidden"); 
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <ParticleBackground /> 
      <CustomCursor /> 
      
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <ScrollRevealManager>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <CanvaDesigns />
                  <Services />
                  <Contact />
                  <SocialSidebar />
                </>
              }
            />
            <Route path="/frontend-service" element={<FrontendService />} />
            <Route path="/fullstack-service" element={<FullStackService />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/canva-design" element={<CanvaDesign />} />
          </Routes>
        </ScrollRevealManager>
      </main>
    </Router>
  );
};

export default App;