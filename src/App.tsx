import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FrontendService from "./components/FrontendService"; // Import your service pages
import FullStackService from "./components/FullStackService";
import DataAnalytics from "./components/DataAnalytics";
import CanvaDesign from "./components/CanvaDesign";
import CanvaDesigns from "./components/CanvaDesignsShowCase";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Main Portfolio Home Route */}
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
              </>
            }
          />
          
          {/* Service Detail Routes */}
          <Route path="/frontend-service" element={<FrontendService />} />
          <Route path="/fullstack-service" element={<FullStackService />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/canva-design" element={<CanvaDesign />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;