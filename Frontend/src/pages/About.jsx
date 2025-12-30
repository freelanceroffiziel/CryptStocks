import React, { useEffect } from "react";
import aboutImage from "../assets/images/istockphoto-2160467886-640x640.jpg";
import Marquee from "../components/miniComponents/Marquee";
import ScrollReveal from "scrollreveal";
import Vision from "../components/aboutComponents/Vision";
import Certainty from "../components/aboutComponents/Certainty";
import WhyChooseUs from "../components/aboutComponents/WhyChooseUs";
import ScrollToTopBtn from "../components/miniComponents/ScrollToTopBtn";

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal("#imgCon", {
      origin: "left",
      distance: "35px",
      duration: 1800,
      delay: 150,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#textCon", {
      origin: "left",
      distance: "40px",
      duration: 1000,
      delay: 150,
    });
  });

  return (
    <>
      <main id="vaterSecCon" className="lg:mt-[18vh] mt-[18vh] md:mt-[14vh] ">
        <section id="sohnSecCon" className="px-6 lg:px-20 ">
          <section id="marqueeSec" className="relative">
            <Marquee/>
          </section>

          <section
            id="contentSec"
            className="flex flex-col items-center gap-16 lg:flex-row lg:gap-10 "
          >
            <div
              id="imgCon"
              className="bg-gray-800 p-3 rounded-tr-[50%] lg:w-[60vw] w-full "
            >
              <div className="relative h-full w-full bg-gray-600 rounded-tr-[50%] p-3  ">
                <img
                  src={aboutImage}
                  alt="About image"
                  className="lg:h-[60vh] lg:w-[100vw] md:w-full md:h-full h-80 w-full rounded-tr-[50%] "
                />
              </div>
            </div>

            <div
              id="textCon"
              className="relative flex flex-col items-center justify-center h-full text-center lg:w-1/2 lg:justify-start lg:items-start lg:text-start "
            >
              <h1 className="text-[30px] md:text-[40px] lg:text-[35px] font-bold tracking-wider mb-3 ">
                We are <span>CryptStocks</span>,
              </h1>
              <p className="text-[23px] md:text-[28px] lg:text-[18px] ">
                We believe Bitcoin is the future and a vehicle for change.Built
                with Bitcoin is our initiative to provide opportunities,improve
                lives,and make the world a better place for communities that
                need it the most, using Bitcoin.
              </p>
            </div>
          </section>
        </section>
        <Vision/>
        <Certainty/>
        <WhyChooseUs/>
        <ScrollToTopBtn/>
      </main>
    </>
  );
};

export default About;
