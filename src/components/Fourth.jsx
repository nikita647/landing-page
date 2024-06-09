import React from "react";

const Customize = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex flex-col items-center md:w-1/2 relative">
        <img
          src="gradient.png"
          alt="gradient"
          className="absolute w-[80%] flex items-center top-[60%] left-[50%]"
          style={{ zIndex: -11, transform: "translate(-50%, -50%)" }}
        />
        <img
          src="Star 3.png"
          className="w-8 absolute top-0 right-0"
          alt="star"
        />
        <img src="frame3.png" alt="Second" className="w-[100%]" />
      </div>
      <div className="flex flex-col justify-center md:w-1/2 p-4">
        <div className="flex items-center mb-4">
          <img src="star-circle.png" alt="Icon1" className="w-12 h-12 mr-2" />
          <h3 className="text-3xl font-semibold">Fully Customizable</h3>
        </div>
        <p className="mb-6 text-gray-500">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
    </div>
  );
};

export default Customize;
