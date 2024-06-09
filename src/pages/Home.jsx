import React from "react";
import Hero from "../components/Hero";
import Section from "../components/second";
import Advantage from "../components/Third";
import Customize from "../components/Fourth";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/Faq";

const Home = () => {
  return (
    <div>
      <img
        src="Star 3.png"
        className="w-8 absolute top-[20%] left-[5%]"
        alt="star"
      />

      <Hero />
      <Section />
      <Advantage />
      <Customize />
      <Testimonials />
      <FAQ />
      <section className="mt-36 px-5 relative">
        <img
          src="gradient.png"
          alt="gradient"
          className="absolute w-[40%] flex items-center top-[5%] left-0"
          style={{ zIndex: -11, transform: "translate(-50%, -50%)" }}
        />
        <img src="Frame.png" className="w-full" alt="frame" />
      </section>
    </div>
  );
};

export default Home;
