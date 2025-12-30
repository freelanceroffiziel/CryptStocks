import React, { useEffect } from "react";
import ChooseImg from "../../assets/images/istockphoto-2174363314-612x612.jpg";
import {
  RiLightbulbFlashFill,
  RiLinksLine,
  RiShieldStarFill,
} from "react-icons/ri";
import ScrollReveal from "scrollreveal";

const WhyChooseUs = () => {
  useEffect(() => {
    ScrollReveal().reveal("#imgDiv", {
      origin: "left",
      distance: "35px",
      duration: 1100,
      delay: 150,
    });
  });

   useEffect(() => {
    ScrollReveal().reveal("#textDiv", {
      origin: "right",
      distance: "35px",
      duration: 1100,
      delay: 150,
    });
  });

  return (
    <>
      <main className="lg:mt-[15vh] mt-[12vh] ">
        <section className="flex flex-col items-center gap-10 px-6 lg:flex-row lg:px-20 lg:gap-10 ">
          <div id="imgDiv" className="lg:w-[90vw] w-full bg-gray-700 p-4 ">
            <img
              src={ChooseImg}
              alt=""
              className="lg:h-[60vh] lg:w-[100vw] md:w-full md:h-full h-80 w-full"
            />
          </div>

          <div id="textDiv" className="">
            <h2 className="text-[38px] md:text-[40px] lg:text-[30px] font-bold mb-4 flex flex-row items-center lg:text-start text-center justify-center lg:justify-start ">
              Why Choose Us
            </h2>
            <ul className="flex flex-col items-start justify-start gap-5 lg:items-center lg:justify-center">
              <li className="flex flex-row items-center justify-center gap-4">
                <span className="">
                  <RiLightbulbFlashFill className="bg-black h-[40px] w-[40px] rounded-full text-gray-50 p-2  " />
                </span>
                <span>
                  <h2 className="text-[29px] md:text-[35px] lg:text-[25px] font-bold mb-1">
                    We Are Professional,
                  </h2>
                  <p className="text-[22px] md:text-[24px] lg:text-[18px] text-shadow-gray-600 tracking-wide">
                    At IconicStocks, We use superhuman efforts to get the job
                    done.We work around the clock to provide our users with what
                    they've been dreaming of. We're making the possible a
                    reality to change the lives of billions around the world.
                  </p>
                </span>
              </li>

              <li className="flex flex-row items-center justify-center gap-4 ">
                <span className="">
                  <RiShieldStarFill className="bg-black h-[40px] w-[40px] rounded-full text-gray-50 p-2 " />
                </span>
                <span>
                  <h2 className="text-[29px] md:text-[35px] lg:text-[25px] font-bold mb-1">
                    We Are Trusted,
                  </h2>
                  <p className="text-[22px] md:text-[24px] lg:text-[18px] text-shadow-gray-600 tracking-wide">
                    Making decisions at CryptStocks, we think about people not
                    profit.
                  </p>
                </span>
              </li>

              <li className="flex flex-row items-center justify-center gap-4">
                <span className="">
                  <RiLinksLine className="bg-black h-[40px] w-[40px] rounded-full text-gray-50 p-2 " />
                </span>
                <span>
                  <h2 className="text-[29px] md:text-[35px] lg:text-[25px] font-bold mb-1">
                    Stay Connected To Our Investors,
                  </h2>
                  <p className="text-[22px] md:text-[24px] lg:text-[18px] text-shadow-gray-600 tracking-wide">
                    We listen to our community 24/7 at IconicStocks.
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhyChooseUs;
