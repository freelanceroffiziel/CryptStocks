import React, { useEffect, useState } from "react";
import { RiArrowDropUpFill } from "react-icons/ri";

const ScrollToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main>
        <section >
          {backToTop && (
            <button onClick={scrollUp} className="fixed lg:bottom-[90px] md:bottom-[11vh] bottom-[4vh] lg:right-[20px] md:right-[30px] right-[26px] lg:text-[45px] md:text-[70px]  text-[70px] z-50  flex items-center justify-center  bg-green-600 rounded-full  border-7 text-gray-100 border-green-800 hover:border-green-900 hover:bg-green-700 ">
              <RiArrowDropUpFill />
            </button>
          )}
        </section>
      </main>
    </>
  );
};

export default ScrollToTopBtn;
