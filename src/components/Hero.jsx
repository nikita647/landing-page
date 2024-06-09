import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="mb-8 pt-20 relative">
            <img
              src="gradient.png"
              alt="gradient"
              className="absolute h-44 w-[50%] flex items-center top-0 left-[30%]"
              style={{ zIndex: -11 }}
            />
            <h1
              className="text-3xl font-bold text-gray-900 responsive-heading"
              style={{ lineHeight: 1.3 }}
            >
              MAKE THE BEST FINANCIAL DECISIONS
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Provide a GitHub repository link with a README.md file that
              includesProvide a GitHub repository link with a README.md file
              that includes
            </p>
            <div className="flex mt-6 gap-2">
              <button className="bg-black text-white px-8 py-3 flex items-center gap-2 rounded text-lg">
                <span>Get Started</span> <img src="arrow.png" alt="arrow" />
              </button>
              <button className="px-8 py-3 flex gap-2 items-center text-lg">
                <IoPlayCircleOutline fontSize={30} />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
          <div>
            <img
              className="w-[90%] h-auto"
              src="hero-bottom.png"
              alt="Bottom Image"
            />
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-96">
          {/* <div className="absolute w-[100%] h-[100%] top-1/3 right-0">
            <EllipseStack />
          </div>
          <div className="absolute w-[100%] h-[100%]">
            <PhoneStack />
          </div> */}
          <img src="Frame 1.png" alt="frame" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
