import React from "react";
import RedHeading from "./RedHeading";

const FAQs = [
  {
    question: "The best financial accounting app ever!",
    answer:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    question: "The best financial accounting app ever!",
    answer:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    question: "The best financial accounting app ever!",
    answer:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    question: "The best financial accounting app ever!",
    answer:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    question: "The best financial accounting app ever!",
    answer:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
  {
    question: "The best financial accounting app ever!",
    answer:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
  },
];

const FAQ = () => {
  return (
    <section className="px-5 mt-12 relative ">
      <RedHeading text={"FAQ"} />
      <img src="Star 3.png" className="w-8 absolute top-0 right-[40%]" alt="star" />
      <h1 className="text-5xl">
        Frequently Asked <br />
        Questions
      </h1>
      <div className="flex flex-wrap justify-center my-5">
        {FAQs.map((faq, index) => {
          const isRedBackground = Math.floor(index / 2) % 2 === index % 2;
          return (
            <div
              key={index}
              className={`w-full mt-6 rounded-lg p-6 md:w-1/2 ${
                isRedBackground
                  ? "bg-red-500 md:bg-red-500"
                  : "bg-red-500 md:bg-white"
              }`}
            >
              <h3
                className={`text-3xl ${
                  isRedBackground ? "text-white" : "text-white md:text-black"
                } font-semibold`}
              >
                {faq.question}
              </h3>
              <p
                className={`text-lg ${
                  isRedBackground ? "text-white" : "text-white md:text-gray-500"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
