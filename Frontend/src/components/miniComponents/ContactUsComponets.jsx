import React, { useEffect, useState } from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ContactUsComponets = () => {
  const [contactUs, setContactUs] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setContactUs(true);
      } else {
        setContactUs(false);
      }
    });
  });

  return (
    <main id="contactUsCon" className="">
      {contactUs && (
        <section
          id="contactUsConSon"
          className="fixed lg:bottom-[208px] bottom-[29vh] lg:right-[20px] md:right-[30px] right-[26px] lg:text-[60px] md:text-[70px]  text-[70px] z-50  flex items-center justify-center text-green-900  p-1.5 group gap-1 m-0 hover:text-green-700"
        >
            <span
              id=""
              className="lg:text-[20px] md:text-[25px] text-[23px] text-gray-50 bg-green-600 px-2 py-1 rounded-tl-2xl rounded-br-2xl "
            >
              <p>Contact Us</p>
            </span>
          <Link to={"/ContactUs"}>
            <RiMessage2Fill className="" />
          </Link>
        </section>
      )}
    </main>
  );
};

export default ContactUsComponets;
