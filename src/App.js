import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Product from "./component/Product";

import Blog from "./component/Blog";

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

        <About />
        <Projects />
        <Product />
        <Service />
        <HVAC />
        <ELV />
        <Plumbing />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product" element={<Product />} />

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Contact />
        <Faq />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
