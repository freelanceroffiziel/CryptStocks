import React, { useEffect } from "react";
import { vision } from "../../arraysfolder/vision";
import { PiResizeLight } from "react-icons/pi";
import ScrollReveal from "scrollreveal";
const Vision = () => {
  useEffect(() =>{
    ScrollReveal().reveal("#visionCon", {
      origin: "bottom",
      distance: "35px",
      duration: 1800,
      delay: 150,
    })
  })
  return (
    <>
      <main className="lg:mt-[15vh] mt-[12vh] lg:px-20 px-6 ">
        <section className="">
          <section
            id="conDivs"
            className="grid w-full gap-12 lg:grid-cols-3 lg:gap-10 "
          >
            {vision.map((visionData) => (
              <div id="visionCon"
                key={visionData.id}
                className="relative flex flex-col items-center gap-5 p-6 border-2 border-gray-300 lg:gap-6 hover:bg-gray-800 hover:text-gray-50"
              >
                <div className="">
                  <h1 className="text-[30px] md:text-[35px] lg:text-[25px] font-bold flex flex-row items-center gap-3 mb-3 ">
                    <PiResizeLight className="text-gray-50 bg-orange-600 rounded-full h-[40px] w-[40px] md:w-[50px] md:h-[50px] lg:h-[40px] lg:w-[40px]  p-2 shadow-md shadow-black " />
                    {visionData.heading}
                  </h1>
                  <p className="text-[20px] md:text-[25px] lg:text-[17px]">
                    {visionData.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default Vision;
