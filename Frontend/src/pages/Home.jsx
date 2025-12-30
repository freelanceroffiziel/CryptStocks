import React, { useEffect } from "react";
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import heroImg from "../assets/bgremoved/humanoid-8722271_640-removebg-preview.png";
import { PiSpeakerLowFill } from "react-icons/pi";
import Plans from "./Plans";
import Benefits from "../components/homeComponents/Benefits";
import DataReViews from "../components/homeComponents/DataReViews";

import ScrollReveal from "scrollreveal";
import Vision from "../components/aboutComponents/Vision";

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal("#textSec", {
      origin: "left",
      distance: "35px",
      delay: 150,
      duration: 1000,
    });
  });

  useEffect(() =>{
    ScrollReveal().reveal("#heroImgSec", {
      origin: "right",
      distance: "35px",
      duration: 1000,
      delay: 150,
    })
  })

  return (
    <>
      <main className="lg:mt-[10vh] mt-[20vh] h-[100vh] w-full px-6 lg:px-20  flex flex-col justify-between lg:gap-3 md:gap-20 gap-12 items-center lg:flex-row  relative">
        <section id="textSec" className="">
          <ul className="flex flex-col gap-2 lg:gap-2 md:gap-5">
            <li className="flex flex-row gap-1 items-center text-[24px] md:text-[25px] lg:text-[20px] ring-2 ring-orange-300 px-3 md:px-2 lg:w-52 md:w-64 w-fit rounded-full ">
              <RiStarFill className="text-orange-600" />
              <span>4.8+ Global rating</span>{" "}
            </li>

            <li className="flex flex-col leading-[50px] ">
              <span className="text-[28px] md:text-[35px] lg:text-[35px] font-medium font-sans tracking-wide ">
                <span className="text-orange-600">High quality</span> data
              </span>

              <span className="text-[35px] md:text-[50px] lg:text-[45px] font-bold font-sans tracking-wider">
                Of <span className="text-orange-600">crypto </span>coins.
              </span>
            </li>

            <li className="text-[22px] md:text-[25px] lg:text-[15px] font-sans text-gray-500 tracking-wide">
              <p>
                Here's a brief and clear description of some of the major crpyto
                coins, ideal for beginners or for use in your platform like{" "}
                <span className="text-green-600 text-[20px] font-semibold tracking-wide ">
                  (CryptStocks)
                </span>
              </p>
            </li>

            <li className="flex flex-row items-center gap-3 mt-5">
              <Link className="border-2 border-orange-600 bg-orange-600 lg:px-3 md:px-4 lg:py-2 py-3  lg:w-[30%] w-[43%] md:w-[22%] text-[17px] md:text-[24px] lg:text-[17px] font-medium  rounded-full text-center tracking-wider object-contain  hover:bg-orange-700 hover:text-gray-200 transition ease-in-out duration-300 transform    ">
                Get started
              </Link>
              <Link to={"/Plans"} className="border-orange-500 bg-gray-200  text-orange-600 border-2 lg:px-3 md:px-4 lg:py-2 py-3  lg:w-[30%] w-[43%] md:w-[22%] text-[17px] md:text-[24px] lg:text-[17px] font-medium rounded-full text-center tracking-wider object-contain  hover:bg-gray-400 transition ease-in-out duration-300 transform  ">
                Plans
              </Link>
            </li>
          </ul>
        </section>

        <section id="heroImgSec" className="relative w-full ">
          <div id="imgDiv" className="">
            <img
              src={heroImg}
              alt="Heor Image"
              className="lg:h-[75vh] lg:w-[80vw] md:w-full md:h-full h-80 w-full  "
            />
          </div>

          <div
            className="relative bg-gray-300 shadow-lg "
            style={{ transform: "rotate(-2deg)", transformOrigin: "left top" }}
          >
            <div className="bg-black flex flex-row items-center fixed px-5 py-5 text-green-600 z-10 text-[30px] cursor-pointer ">
              <PiSpeakerLowFill />
            </div>
            <div className="relative text-orange-700">
              <marquee
                behavior="smooth"
                direction="left"
                className="py-5"
                speed={40}
                pauseOnHover={true}
                delay={1}
              >
                <span>
                  🚀 Breaking: CryptStocks just hit a new all-time high! | 📈
                  Investment tip of the day: Diversify! | 🔒 Security updates
                  rolling out this week!
                </span>
              </marquee>
            </div>
          </div>
        </section>
      </main>
      <Benefits />
      <Plans />
      <DataReViews />
      <Vision/>
    </>
  );
};

export default Home;
