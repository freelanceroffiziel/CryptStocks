import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
//import { CountUp } from 'https://cdn.jsdelivr.net/npm/countup.js@2.8.0/dist/countUp.min.js';
const Certainty = () => {

  useEffect(() => {
    ScrollReveal().reveal("#certaintyCon", {
      origin: "bottom",
      distance: "35px",
      duration: 1100,
      delay: 150,
    });
  });

  useEffect(() =>{
    ScrollReveal().reveal(".count-numbers", {
      interval:200,
      afterReveal: function(el){
        const countEl = el;
        const targetValue = countEl.getAttribute('data-target');

          // Initialize countupjs and start counting
          const countUp = new CountUp(el, targetValue, {duration: 3});
          if(!countUp.error){
            countUp.start();
          }else{
            console.log(countUp.error)
          }
      }
    })
  })

  return (
    <>
      <main id="certaintyCon" className="lg:mt-[15vh] mt-[12vh]  ">
        <section id="" className="">
          <section className="py-10 bg-gray-800 text-gray-50 ">
            <div className="px-6 text-center lg:px-20">
              <h2 className="text-[29px] md:text-[35px] lg:text-[25px] font-bold mb-4">
                All of Our Customers Trust Their Success To Us
              </h2>
              <p className="text-[23px] md:text-[25px] lg:text-[17px]">
                Our professional team works to increase productivity and cost
                effectiveness on the market.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-10 px-6 py-10 bg-black text-gray-50 lg:px-20 md:px-7 lg:flex-row lg:justify-center lg:gap-40 ">
            <div
              id="firstDiv"
              className="text-[29px] md:text-[39px] lg:text-[30px] font-bold lg:w-[25vw] text-center md:text-center lg:text-start "
            >
              <p>We Have Great Achievement To Show!!</p>
            </div>

            <div className="flex flex-col justify-center gap-10 md:flex-row lg:gap-40 md:gap-40 ">
              <div id="secDiv" className="flex flex-col gap-5">
                <span id="satisfiedInvestors">
                  <span className="count-numbers text-[30px] md:text-[35px] lg:text-[25px] font-bold " data-target="8900">
                    0
                  </span>
                  <p className="text-[23px] md:text-[25px] lg:text-[17px] tracking-wider ">
                    Satisfied Investors
                  </p>
                </span>
                <span id="yearsActive">
                  <span className="count-numbers text-[30px] md:text-[35px] lg:text-[25px] font-bold " data-target="5">
                    0
                  </span>
                  <p className="text-[23px] md:text-[25px] lg:text-[17px] tracking-wider ">
                    Years Experience
                  </p>
                </span>
              </div>

              <div id="thirdDiv" className="flex flex-col gap-5">
                <span id="Deposits" className="mb-5">
                  <span className="count-numbers text-[30px] md:text-[35px] lg:text-[25px] font-bold " data-target="3507500">
                   0
                  </span>
                  <p className="text-[23px] md:text-[25px] lg:text-[17px] tracking-wider ">
                    Deposits
                  </p>
                </span>
                <span id="Withdrawals">
                  <span className="count-numbers text-[30px] md:text-[35px] lg:text-[25px] font-bold " data-target="9533400" >
                    0
                  </span>
                  <p className="text-[23px] md:text-[25px] lg:text-[17px] tracking-wider ">
                    Withdrawals
                  </p>
                </span>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Certainty;
