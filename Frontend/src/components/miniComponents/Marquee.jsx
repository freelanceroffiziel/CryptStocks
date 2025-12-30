import React from "react";
import { PiSpeakerLowFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Marquee = () => {
  return (
    <>
      <main className="relative my-8">
        <div className="relative flex flex-row items-center ">
          <div className="bg-gray-800 hover:bg-black px-3  py-2 text-green-600 z-10 text-[33px] lg:text-[30px] md:text-[36px] cursor-pointer transition ease-in-out duration-300 rounded  ">
            <span className="">
              <Link
                to={"/Feeds"}
                className="flex flex-row items-center justify-between gap-3 font-semibold hover:underline "
              >
                News <PiSpeakerLowFill className="text-orange-600" />
              </Link>
            </span>
          </div>

          <div className="relative w-full text-orange-700">
            <marquee
              behavior="smooth"
              direction="left"
              className="py-5"
              speed={40}
              pauseOnHover={true}
              delay={2}
            >
              <span className="text-[20px] lg:text-[18px] md:text-[22px]">
                🚀 Breaking: CryptStocks just hit a new all-time high! | 📈
                Investment tip of the day: Diversify! | 🔒 Security updates
                rolling out this week! 🚀 Breaking: CryptStocks just hit a new
                all-time high! | 📈 Investment tip of the day: Diversify! | 🔒
                Security updates rolling out this week! 🚀 Breaking: CryptStocks
                just hit a new all-time high! | 📈 Investment tip of the day:
                Diversify! | 🔒 Security updates rolling out this week! 🚀
                Breaking: CryptStocks just hit a new all-time high! | 📈
                Investment tip of the day: Diversify! | 🔒 Security updates
                rolling out this week! 🚀 Breaking: CryptStocks just hit a new
                all-time high! | 📈 Investment tip of the day: Diversify! | 🔒
                Security updates rolling out this week! 🚀 Breaking: CryptStocks
                just hit a new all-time high! | 📈 Investment tip of the day:
                Diversify! | 🔒 Security updates rolling out this week!
              </span>
            </marquee>
          </div>
        </div>
      </main>
    </>
  );
};

export default Marquee;
