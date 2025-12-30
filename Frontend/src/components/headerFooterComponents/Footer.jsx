import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { RiMailFill, RiPinterestFill, RiWhatsappFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import WhatsAppChat from "../miniComponents/WhatsAppChat";
import ContactUs from "../miniComponents/ContactUsComponets";
import ScrollToTopBtn from "../miniComponents/ScrollToTopBtn";
import SmartSupp from "../miniComponents/SmartSupp";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-300 lg:p-8 p-3 md:mt-[9vh] mt-[10vh] lg:mt-[10vh] ">
        <section
          id=""
          className="relative flex flex-col items-center justify-between gap-10 px-4 pt-6 pb-16 text-gray-300 bg-black lg:flex-row rounded-tl-4xl rounded-br-4xl lg:px-11 lg:py-11"
        >
          <div id="firstDiv" className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <span>
                <Link to={""}>
                  <span className="text-[30px] md:text-[40px] lg:text-[30px] font-extrabold ">
                    Crypt
                    <span className="font-bold text-orange-600">Stocks</span>
                  </span>
                </Link>
              </span>
              <span className="text-gray-300 text-[18px] md:text-[24px] lg:text-[16px] ">
                <p>
                  CryptStocks bridges traditional stocks and crypto, offering
                  real-time data, AI insights, and secure blockchain tools for
                  smarter, hybrid investing.
                </p>
              </span>
            </div>
            <div>
              <span className="text-[33px] font-semibold tracking-wider ">
                <Link>Contact Us</Link>
              </span>
              <ul className="flex flex-row items-center text-[30px] font-semibold gap-3 ">
                <li className="p-2 text-orange-500 transition duration-200 ease-in-out bg-gray-300 rounded hover:bg-gray-400 hover:text-orange-600 ">
                  <FiInstagram />
                </li>
                <li className="p-2 text-orange-500 transition duration-200 ease-in-out bg-gray-300 rounded hover:bg-gray-400 hover:text-orange-600 ">
                  {" "}
                  <FiLinkedin />{" "}
                </li>
                <li className="p-2 text-orange-500 transition duration-200 ease-in-out bg-gray-300 rounded hover:bg-gray-400 hover:text-orange-600 ">
                  <RiPinterestFill />
                </li>
                <li className="p-2 text-orange-500 transition duration-200 ease-in-out bg-gray-300 rounded hover:bg-gray-400 hover:text-orange-600 ">
                  <RiWhatsappFill />
                </li>
              </ul>
            </div>
          </div>

          <div
            id="miniContainer"
            className="flex flex-col items-center w-full gap-10 md:flex-row"
          >
            <div
              id="thirdDiv"
              className="w-full pt-2 pb-3 pl-2 pr-3 bg-gray-300 rounded-br-4xl rounded-tl-4xl lg:w-fit"
            >
              <div
                id=""
                className="flex flex-col items-center justify-center hover:bg-gray-950 bg-black text-gray-300 lg:w-[16vw] w-full lg:h-[25vh] h-[40vh] tracking-wider rounded-br-4xl rounded-tl-4xl transition ease-in-out duration-200   "
              >
                <span className="text-[35px] text-orange-500 ">
                  <RiMailFill />
                </span>
                <span className="text-[22px]  md:text-[23px] lg:text-[16px]">
                  Info@CryptStocks.com
                </span>
              </div>
            </div>

            <div
              id="fourthDiv"
              className="relative w-full pt-2 pb-3 pl-2 pr-3 bg-gray-300 lg:w-fit rounded-br-4xl rounded-tl-4xl "
            >
              <div
                id=""
                className="flex flex-col items-center justify-center hover:bg-gray-950 bg-black text-gray-300 lg:w-[16vw] w-full lg:h-[25vh] h-[40vh] tracking-wider rounded-br-4xl rounded-tl-4xl shadow-2xl transition ease-in-out duration-200"
              >
                <span className="text-[35px] text-orange-500 ">
                  <RiMailFill />
                </span>
                <span className="text-[22px]  md:text-[23px] lg:text-[16px]">
                  CryptStocks.com
                </span>
              </div>
            </div>
          </div>

          <span className="absolute lg:bottom-2 lg:right-10 bottom-3 right-6 text-[18px] z-0 tracking-wide  ">
            {" "}
            &copy; CryptStocks 2025 all Right Reserved{" "}
          </span>
        </section>
      </footer>
      <section className="absolute">
        <SmartSupp />
      </section>
      <section>
        <section>
          <ContactUs />
        </section>
        <section>
          <WhatsAppChat />
        </section>
        <section>
          <ScrollToTopBtn />
        </section>
      </section>
    </>
  );
};

export default Footer;
