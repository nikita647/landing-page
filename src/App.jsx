import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App w-9/10 sm:w-9/10 lg:w-4/5 mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
}

const About = () => <div>About Page</div>;
const Pricing = () => <div>Pricing Page</div>;
const Features = () => <div>Features Page</div>;

export default App;
