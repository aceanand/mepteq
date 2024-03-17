import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Product from "./component/Product";

import Footer from "./component/Footer";
import Faq from "./component/Faq";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import HVAC from "./component/HVAC";
import ELV from "./component/ELV";
import Plumbing from "./component/Plumbing";
import Service from "./component/Service";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Product />
        <Service />
        <HVAC />
        <ELV />
        <Plumbing />
        <Contact />
        <Faq />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
