import React, { useEffect } from "react";
import {
  RiCashFill,
  RiDatabase2Fill,
  RiDatabaseFill,
  RiInbox2Fill,
  RiMoneyDollarBoxFill,
  RiShareCircleFill,
  RiUserSharedFill,
} from "react-icons/ri";
import DashboardCharts from "../dashboardMniComponents/DashboardCharts";
import CopyAbleInput from "../dashboardMniComponents/CopyAbleInput";
import LineChartOne from "../../../../components/chartsComponents/LineChartOne";
import ScrollReveal from "scrollreveal";
// import { CountUp } from "https://cdn.jsdelivr.net/npm/countup.js@2.8.0/dist/countUp.min.js";
const DashboardHome = () => {

  useEffect(() => {
    ScrollReveal().reveal(".count-numbers", {
      interval: 200,
      afterReveal: function (el) {
        const countEl = el;
        const targetValue = countEl.getAttribute("data-target");

        // Initialize countupjs and start counting
        const countUp = new CountUp(el, targetValue, { duration: 3 });
        if (!countUp.error) {
          countUp.start();
        } else {
          console.log(countUp.error);
        }
      },
    });
  });

  return (
    <main className="">
      <section className="">
        <div id="dashboardSon" className="flex flex-col gap-10">
          <div
            id="dashboardDivs"
            className="grid gap-5 transition-all lg:grid-cols-4 "
          >
            <div
              id="depositDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50 "
            >
              <div className="depositDiv">
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Deposit
                </p>
                <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                  $
                  <span
                    className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                    data-target="20000"
                  >
                    0
                  </span>
                </span>
              </div>
              <span>
                {" "}
                <RiMoneyDollarBoxFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
            </div>

            <div
              id="depositBalanceDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50 "
            >
              <div>
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Deposit Balance
                </p>
                <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                  $
                  <span
                    className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                    data-target="20000"
                  >
                    0
                  </span>
                </span>
              </div>
              <span>
                {" "}
                <RiDatabase2Fill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
            </div>

            <div
              id="profitBalanceDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50 "
            >
              <div>
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Profit Balance
                </p>
                <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                  $
                  <span
                    className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                    data-target="20000"
                  >
                    0
                  </span>
                </span>
              </div>
              <span>
                {" "}
                <RiDatabaseFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
            </div>

            <div
              id="referralBalanceDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50 "
            >
              <div>
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Referral Balance
                </p>
                <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                  $
                  <span
                    className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                    data-target="5000"
                  >
                    0
                  </span>
                </span>
              </div>
              <span>
                <RiShareCircleFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
            </div>

            <div
              id="usersReferredDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50 "
            >
              <div>
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Users Referred
                </p>
                <span
                  className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                  data-target="8"
                >
                  0
                </span>
              </div>
              <span>
                <RiUserSharedFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
            </div>

            <div
              id="amountInvestedDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50 "
            >
              <div>
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Amount Invested
                </p>
                <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                  $
                  <span
                    className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                    data-target="5000"
                  >
                    0
                  </span>
                </span>
              </div>
              <span>
                <RiCashFill className="text-[45px] md:text-[50px] lg:text-[35px]  text-green-600 " />
              </span>
            </div>

            <div
              id="amountWithdrwanDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50"
            >
              <div>
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Amount Withdrawn
                </p>
                <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                  $
                  <span
                    className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                    data-target="18000"
                  >
                    0
                  </span>
                </span>
              </div>
              <span>
                <RiCashFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
            </div>

            <div
              id="activeInvestmentDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50 "
            >
              <div>
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Active Investments
                </p>
                <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                  $
                  <span
                    className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                    data-target="6"
                  >
                    0
                  </span>
                </span>
              </div>
              <span>
                {" "}
                <RiInbox2Fill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
            </div>

            <div
              id="finishedInvestmentsDiv"
              className="flex flex-row items-center justify-between w-full gap-6 p-4 transition-all bg-orange-900 rounded hover:bg-orange-950 text-gray-50 "
            >
              <div>
                <p className="text-[22px] md:text-[25px] lg:text-[16px]">
                  Finished Investments
                </p>
                <span>
                  <span
                    className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                    data-target="6"
                  >
                    0
                  </span>
                </span>
              </div>
              <span>
                {" "}
                <RiInbox2Fill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
              </span>
            </div>
          </div>

          {/* copyDiv */}
          <section id="copyDiv">
            <div
              id="copyDivSohn"
              className="flex flex-col gap-5 px-3 py-10 bg-orange-900 rounded text-gray-50"
            >
              <CopyAbleInput />
            </div>
          </section>

          <section className="ineChart mt-5">
            <LineChartOne />
          </section>

          <section className="dashBoard">
            <DashboardCharts />
          </section>
        </div>
      </section>
    </main>
  );
};

export default DashboardHome;
