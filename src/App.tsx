import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FrontendService from "./components/FrontendService"; // Import your service pages

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
                <Services />
              </>
            }
          />
          
          {/* Service Detail Routes */}
          <Route path="/frontend-service" element={<FrontendService />} />
          {/* Add your other service paths here as you build them:
          <Route path="/fullstack-service" element={<FullStackService />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/machine-learning" element={<MachineLearning />} /> 
          */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;