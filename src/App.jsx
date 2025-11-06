import { Route, Routes } from "react-router-dom";
import React from 'react';

// Pages
import HomePage from "./pages/HomePage";
import ProvidersPage from "./pages/ProvidersPage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

import GalleryPage from './pages/GalleryPage';

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
         <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />  

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
