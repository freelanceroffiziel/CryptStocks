import React, { useEffect, useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppChat = () => {
  const [WhatsAppChat, setWhatsAppChat] = useState(false);
  const phoneNumber = +14148854567;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setWhatsAppChat(true);
      } else {
        setWhatsAppChat(false);
      }
    });
  });

  return (
    <>
      <main id="chatCon">
        {WhatsAppChat && (
          <section
            id="chatConSon"
            className="fixed lg:bottom-[155px] md:bottom-[21vh] bottom-[18vh] lg:right-[20px] md:right-[30px] right-[26px] lg:text-[50px] md:text-[70px] text-[70px] z-50  flex items-center justify-center  bg-green-800 rounded-full p-1.5"
          >
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600"
            >
              <RiWhatsappFill />
            </a>
          </section>
        )}
      </main>
    </>
  );
};

export default WhatsAppChat;
