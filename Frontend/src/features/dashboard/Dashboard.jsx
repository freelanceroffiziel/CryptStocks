import React, { useEffect, useState } from "react";
import Marquee from "../../components/miniComponents/Marquee";
import RightsReserve from "../../components/miniComponents/RightsReserve";
import ImageUploader from "./dashboardComponent/accountComponent/ImageUploader";
import Deposit from "./dashboardComponent/depositComponent/Deposit";
import Withdraw from "./dashboardComponent/withdrawalComponent/Withdraw";
import Referrals from "./dashboardComponent/referralComponents/Referrals";
import TransactionHistory from "./dashboardComponent/transactionHistoryComponent/TransactionHistory";
import StartInvesting from "./dashboardComponent/startInvestingComponent/StartInvesting";
import DashboardHeader from "./dashboardComponent/headerComponent/DashboardHeader";
import DashboardHome from "./dashboardComponent/dashboardHomeComponent/DashboardHome";
import SideBar from "./sideBarComponents/sideBarFolder/sideBar";

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  return (
    <main id="mainCon" className="">
      <section id="mainSohn" className="flex min-h-screen">
        {/* Sidebar section start */}
        <section
          id="dashboardSideBarCon"
          className=" "
        >
          <div>
            <SideBar setSelectedSection={setSelectedSection} />
          </div>
        </section>
        {/* Sidebar section end */}

        {/* ConTent Below */}
        {/* dashboardContentHeaderSection start*/}
        <section className="header">
          <DashboardHeader setSelectedSection={setSelectedSection} />
        </section>
        {/* dashboardContentHeaderSection end*/}

        <section
          id="dashboardContentVater"
          className="w-full lg:flex-1 lg:p-8 lg:ml-[255px] mt-[9vh] "
        >
          <section id="dashboardContentSohn">
            {/* contentmarquee start */}
            <div id="marqueeDiv" className="px-6 mt-20 lg:px-0 lg:mt-0">
              <Marquee />
            </div>
            {/* contentmarquee end */}

            {/* Conditional content rendering based on selected section */}
            <section id="conditionalSec" className="p-6 lg:p-0">
              {selectedSection === "dashboard" && (
                <section id="dashboardSecVater" className="">
                  <DashboardHome />
                </section>
              )}
              {selectedSection === "startInvesting" && (
                <section id="startInvestingConDiv">
                  <StartInvesting />
                </section>
              )}
              {selectedSection === "transactionHistory" && (
                <section id="transactionHistoryCon">
                  <TransactionHistory />
                </section>
              )}
              {selectedSection === "deposit" && (
                <section id="depositConDiv" className="">
                  <Deposit />
                </section>
              )}
              {selectedSection === "withdraw" && (
                <section id="withdrawConDiv">
                  <Withdraw />
                  <span className="">
                    <RightsReserve />
                  </span>
                </section>
              )}
              {selectedSection === "account" && (
                <section id="accountVaterDiv">
                  <div id="accountSonDiv">
                    <ImageUploader />
                  </div>
                </section>
              )}
              {selectedSection === "referral" && (
                <section className="refferralSon">
                  <Referrals />
                </section>
              )}
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
