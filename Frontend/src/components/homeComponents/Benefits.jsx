import React, { useEffect } from "react";
import { benefits } from "../../arraysfolder/benefits";
import BenefitsRows from "./BenefitsRows";
import ScrollReveal from "scrollreveal";

const Benefits = () => {
  useEffect(() => {
    ScrollReveal().reveal("#benefitsCon", {
      origin: "bottom",
      duration: 1120,
      delay: 150,
      distance: "35px",
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#title", {
      origin: "bottom",
      duration: 1140,
      delay: 150,
      distance: "35px",
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#benefitsRows", {
      origin: "bottom",
      duration: 1160,
      delay: 150,
      distance: "35px",
    });
  });
  return (
    <>
      <main
        id="benefitsCon"
        className="lg:mt-[25vh] md:mt-[12vh] mt-[25vh]  relative w-full min-h-screen px-6 py-20 font-serif bg-black  lg:px-20 md:px-7 text-gray-50 "
      >
        <BenefitsRows />
        <section id="" className="relative w-full">
          <div
            id="title"
            className="text-center text-[30px] md:text-[40px] lg:text-[30px] lg:py-20 py-20 md:py-28 font-bold"
          >
            <h1>
              Benefits Of Using Our Solution{" "}
              <span className="text-[30px] md:text-[35px] lg:text-[30px] text-green-500">
                *
              </span>
            </h1>
          </div>

          <div
            id="benefitsRows"
            className="grid items-center justify-center w-full gap-12 lg:gap-10 lg:grid-cols-3 "
          >
            {benefits.map((benefitsItems) => (
              <div
                key={benefitsItems.id}
                className="relative flex flex-col items-center justify-center gap-8 p-6 border-2 lg:gap-6 border-gray-50 hover:bg-gray-800 "
              >
                <p className="text-[30px] md:text-[35px] lg:text-[25px] font-bold ">
                  {benefitsItems.title}{" "}
                </p>
                <p className="text-[20px] md:text-[28px] lg:text-[17px]">
                  {benefitsItems.content}{" "}
                </p>
                <button className="border-2 px-3 py-2 text-[20px] md:text-[25px] lg:text-[18px] tracking-wider hover:bg-gray-900 ">
                  {benefitsItems.button}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Benefits;
