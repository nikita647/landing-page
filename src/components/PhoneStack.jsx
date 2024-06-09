import React from "react";

const PhoneStack = () => {
  return (
    <div className="relative w-full h-full">
      <img
        className="absolute left-0 top-0 z-2"
        style={{ zIndex: 2 }}
        src="iPhone-13-Pro-Front.png"
        alt="img-stack"
      />
      <img
        className="absolute left-[20%] top-[20%] z-1"
        style={{ zIndex: 1 }}
        src="iPhone-13-Pro-Front (3).png"
        alt="img-stack"
      />
      <img
        className="absolute left-[40%] top-[40%] z-0"
        src="iPhone-13-Pro-Front.png"
        alt="img-stack"
      />
    </div>
  );
};

export default PhoneStack;
