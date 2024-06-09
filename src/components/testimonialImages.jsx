import React from "react";

const ImageSection = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full h-full">
        <div className="flex items-center gap-2">
          <img
            src="people/pep4.png"
            alt="First Image"
            className="w-10 h-auto rounded-full shadow-lg z-10"
          />
          <img
            src="people/pep1.png"
            alt="Blurry Image 1"
            className="w-8 h-auto rounded-full filter blur"
            style={{ filter: "blur(1px)" }}
          />
          <img
            src="people/pep2.png"
            alt="Blurry Image 2"
            className="w-8 h-auto rounded-full filter blur"
            style={{ filter: "blur(1px)" }}
          />
          <img
            src="people/pep3.png"
            alt="Blurry Image 3"
            className="w-8 h-auto rounded-full filter blur"
            style={{ filter: "blur(1px)" }}
          />
          <img
            src="people/pep5.png"
            alt="Blurry Image 4"
            className="w-8 h-auto rounded-full filter blur"
            style={{ filter: "blur(1px)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
