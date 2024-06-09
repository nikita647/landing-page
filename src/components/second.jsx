import React from "react";
import RedHeading from "./RedHeading";

const Section = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row custom relative">
      {/* Left Section */}
      <div className="flex flex-col items-center md:w-1/2 relative">
        <img
          src="gradient.png"
          alt="gradient"
          className="absolute w-[80%] flex items-center top-[30%] left-[30%]"
          style={{ zIndex: -11, transform: "translate(-50%, -50%)" }}
        />
        <img
          src="Star 3.png"
          className="w-8 absolute top-0 left-0"
          alt="star"
        />
        <img src="second-section.png" alt="Second" className="w-[100%]" />
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center md:w-1/2 p-4">
        <RedHeading text={"features"} />
        <h1 className="font-bold text-5xl mt-2 mb-6">Uifry Premium</h1>
        {/* First Heading */}
        <div className="flex items-center mb-4">
          <img src="star-05.png" alt="Icon1" className="w-6 h-6 mr-2" />
          <h3 className="text-lg font-semibold">Budgeting Intervals</h3>
        </div>
        <p className="mb-6 text-gray-500">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor. heading.
        </p>

        {/* Second Heading */}
        <div className="flex items-center mb-4">
          <img src="cube-02.png" alt="Icon2" className="w-6 h-6 mr-2" />
          <h3 className="text-lg font-semibold">Budgeting Intervals</h3>
        </div>
        <p className="mb-6 text-gray-500">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>

        {/* Third Heading */}
        <div className="flex items-center mb-4">
          <img src="cube-04.png" alt="Icon3" className="w-6 h-6 mr-2" />
          <h3 className="text-lg font-semibold">Budgeting Intervals</h3>
        </div>
        <p className="mb-6 text-gray-500">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
    </div>
  );
};

export default Section;
