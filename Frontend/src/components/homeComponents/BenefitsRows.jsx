import React, { useEffect } from "react";
import { benefitsRows } from "../../arraysfolder/benefitsRows";
import ScrollReveal from "scrollreveal";

const BenefitsRows = () => {
  useEffect(() => {
    ScrollReveal().reveal("#benefitsRows", {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "35px",
    });
  });

  return (
    <>
      <main>
        <section>
          <div></div>

          <div
            id="benefitsRows"
            className="lg:absolute left-0 z-20  top-[-15%] grid lg:grid-cols-3 lg:px-20 gap-[1px] w-full"
          >
            {benefitsRows.map((rows) => (
              <div
                key={rows.id}
                className="flex flex-col gap-3 px-6 py-10 bg-black shadow hover:bg-gray-600 shadow-gray-50 "
              >
                <h1 className="text-[30px] md:text-[35px] lg:text-[30px] flex flex-row items-center justify-between ">
                  {rows.heading}
                  <span>
                    <img
                      src={rows.icon}
                      alt=""
                      className=" bg-green-600 h-[50px] w-[50px] text-gray-50 p-1  rounded-full shadow-md shadow-gray-200 "
                    />
                  </span>
                </h1>
                <p className="text-[20px] md:text-[28px] lg:text-[17px]">
                  {rows.para}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default BenefitsRows;
