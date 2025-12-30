import React from "react";
import { Link } from "react-router-dom";
import LineChartOne from "../components/chartsComponents/LineChartOne";
import Marquee from "../components/miniComponents/Marquee";

const Feeds = () => {
  return (
    <>
      <main className="lg:mt-[18vh] mt-[18vh] md:mt-[14vh]  ">
        <section id="" className="px-6 lg:px-20">

           <section id="marquee" className="relative">
          <Marquee/>
        </section>
         
        </section>

       <section className="px-6 lg:px-20">
         <LineChartOne/>
       </section>   

       <section id="" className="">

        </section>    
      </main>
    </>
  );
};

export default Feeds;
