import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/HomePage";
import About from "./components/AboutPage"
import Services from './components/ServicesPage'
import Contact from "./components/ContactPage";
import ServicesDetailPage from "./components/ServicesDetailPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path= "/" element = {<Home />} />
          <Route path= "/about" element = {<About />} />
          <Route path= "/services" element = {<Services />} />
          <Route path= "/:slug" element = {<ServicesDetailPage />} />
          <Route path= "/contact" element = {<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App