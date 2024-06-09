import React from "react";
import RedHeading from "./RedHeading";

const Advantage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col justify-center md:w-1/2 p-4">
        <RedHeading text={"Advantages"} />
        <h1 className="font-bold text-5xl mt-2 mb-6">Why Choose Uifry?</h1>
        {/* First Heading */}
        <div className="flex items-center mb-4">
          <img src="bell.png" alt="Icon1" className="w-12 h-12 mr-2" />
          <h3 className="text-3xl font-semibold">Clever Notifications</h3>
        </div>
        <p className="mb-6 text-gray-500">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>

      <div className="flex flex-col items-center md:w-1/2 relative">
        <img
          src="Star 3.png"
          className="w-8 absolute top-0 right-0"
          alt="star"
        />
        <img
          src="gradient.png"
          alt="gradient"
          className="absolute w-[80%] flex items-center top-[60%] left-[30%]"
          style={{ zIndex: -11, transform: "translate(-50%, -50%)" }}
        />
        <img src="frame2.png" alt="Second" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Advantage;
