import React, { useEffect } from "react";
import Slider from "react-slick";
import { dataReviews } from "../../arraysfolder/dataReviews";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollReveal from "scrollreveal";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 z-10 p-3 text-orange-600 transition transform -translate-y-1/2 border-2 border-orange-600 rounded-full cursor-pointer top-1/2 hover:bg-orange-600 hover:text-white"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 z-10 p-3 text-orange-600 transition transform -translate-y-1/2 border-2 border-orange-600 rounded-full cursor-pointer top-1/2 hover:bg-orange-600 hover:text-white"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const DataReViews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

   useEffect(() => {
    ScrollReveal().reveal("#dataReviews", {
      origin: "bottom",
      distance: "35px",
      duration: 1000,
      delay: 150,
    });
  });

  return (
    <main  className="flex items-center justify-center w-full py-12 ">
      <section id="dataReviews"  className="w-full px-6 max-w-7xl lg:px-12">
        <Slider {...settings}>
          {dataReviews.map((datas) => (
            <div key={datas.id}  className="">
              <div className=" h-[450px] text-navyBlue rounded-xl flex flex-col overflow-hidden">
                <div
                  id="imgCon"
                  className="flex items-center justify-center h-56 bg-navyBlue"
                >
                  <img
                    src={datas.Image}
                    alt={`${datas.name}' review`}
                    className="object-cover rounded-full h-44 w-44"
                  />
                </div>
                
                <div
                  id="textCon"
                  className="flex flex-col items-center justify-center gap-5 px-8 py-5 text-center md:px-11"
                >
                  <p className="text-[20px] md:text-[28px] lg:text-[20px] ">
                    {datas.para}
                  </p>
                  <p className="font-bold text-[30px] md:text-[33px] lg:text-[25px] ">
                    {datas.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
};

export default DataReViews;
