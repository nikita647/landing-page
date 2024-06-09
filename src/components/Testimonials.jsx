import React from "react";
import ImageSection from "./testimonialImages";

const Testimonials = () => {
  return (
    <section>
      <div className="w-full text-center">
        <div className=" font-bold tracking-widest  uppercase">TESTIMONIAL</div>

        <h1 className="text-5xl font-bold">
          What our users
          <br /> say about us?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:w-1/2 relative">
          <img
            src="gradient.png"
            alt="gradient"
            className="absolute w-[80%] flex items-center top-[50%] left-[50%]"
            style={{ zIndex: -11, transform: "translate(-50%, -50%)" }}
          />
          <img src="testimonial.png" alt="Second" className="w-[100%]" />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 p-4">
          <div className="flex items-center mb-4">
            <h3 className="text-3xl font-semibold">
              The best financial accounting app ever!
            </h3>
          </div>
          <p className="mb-6 text-gray-500 text-lg">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <ImageSection />
          <p className="uppercase font-bold mt-4">Nick Jonas</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
