import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyMap from "../components/miniComponents/MyMap";

const ContactUs = () => {
  const phoneNumber = +14148854567;

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });
  
  return (
    <>
      <main
        id=""
        className="pt-[20vh] bg-gradient-to-br from-black via-gray-900 to-gray-500  text-gray-50  pb-20 relative"
      >
        <span className="text-[65px] md:text-[25px] lg:text-[70px] text-center items-center flex justify-center lg:mb-[12vh] mb-[6vh]  font-semibold  text-transparent bg-transparent bg-gradient-to-r from-green-600 via-green-900  to-green-950 bg-clip-text ">
          Contact Us
        </span>
        
        <section id="" className="relative">
          <section
            id="firstScecCon"
            className="flex  flex-col justify-between gap-10 lg:flex-row px-6 lg:px-20"
          >
            <div className="text-[38px] md:text-[25px] lg:text-[70px] lg:leading-19 leading-12 font-serif  text-center lg:text-start bg-gradient-to-r bg-clip-text bg-transparent text-transparent lg:from-green-950 from-green-700 via-green-800 to-orange-500   ">
              <h2>
                We're here to help{" "}
                <span className="font-bold text-green-800 ">anytime</span>.
              </h2>
            </div>
            <div className="bg-gradient-to-r bg-clip-text bg-transparent text-transparent from-green-600 via-green-500 to-orange-500  ">
              <p className="text-[24px] md:text-[25px] lg:text-[20px] font-sans lg:text-start  ">
                Have questions about Jarden, your wallet, or how CryptStocks
                works? Our support team is ready to assist you 24/7.
              </p>
              <div className="grid gap-5 mt-6 lg:grid-cols-2 ">
                <span id="address">
                  <h1 className="text-[24px] md:text-[25px] lg:text-[25px] font-semibold font-serif tracking-wide ">
                    ADDRESS <span className="text-green-700">*</span>
                  </h1>
                  <p className="text-[24px] md:text-[25px] lg:text-[17px] text-green-700 hover:text-green-600">
                    123 Main Street City, Country 12345
                  </p>
                </span>

                <span id="email">
                  <h1 className="text-[24px] md:text-[25px] lg:text-[25px] font-semibold font-serif tracking-wide ">
                    EMAIL <span className="text-green-700">*</span>
                  </h1>
                  <p className="text-[24px] md:text-[25px] lg:text-[17px] text-green-700 hover:text-green-600">
                    IconicBank@gmail.com
                  </p>
                </span>

                {/*  */}
                <span id="phone">
                  <h3 className="text-[24px] md:text-[25px] lg:text-[25px] font-semibold font-serif tracking-wide">
                    Phone <span className="text-green-700">*</span>
                  </h3>
                  <p className="mt-1 text-green-700 hover:text-green-600 text-[24px] md:text-[25px] lg:text-[17px]">
                    {" "}
                    +1 (414) 885 - 4567
                  </p>
                </span>

                <span id="whatsapp">
                  <h3 className="text-[24px] md:text-[25px] lg:text-[25px] font-semibold font-serif tracking-wide">
                    WhatsApp Chat <span className="text-green-700">*</span>
                  </h3>
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-600 text-[24px] md:text-[25px] lg:text-[17px] "
                  >
                    +1 (414) 885 - 4567
                  </a>
                </span>
              </div>
            </div>
          </section>

          <section id="secSecTion" className="relative px-6 lg:px-20">
            <main className="relative min-h-screen pt-[18vh]  overflow-hidden">
              {/* Blurred Decorative Shape */}
              <div className="absolute -top-32 -left-32 w-[400px] h-[400px] blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px]  rounded-full opacity-20 blur-2xl"></div>

              {/* Dotted SVG Overlay */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
              >
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" fill="gray" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>

              <section className="relative max-w-4xl lg:p-10 py-10 px-5 mx-auto bg-gray-50 border border-gray-200 shadow-xl bg-opacity-80 backdrop-blur-md rounded-3xl">
                <span className="text-4xl font-extrabold text-center text-gray-800 ">
                  <h2 className="bg-gradient-to-r bg-clip-text bg-transparent text-transparent from-green-950 via-green-800 to-orange-500  ">
                    Get in Touch
                  </h2>
                  <p className="text-[23px] md:text-[25px] font-semibold mt-5 lg:text-[20px] text-green-900">
                    Fill the form below and our team will get back to you as
                    soon as possible
                  </p>
                </span>

                <div className="mt-16">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={ContactSchema}
                    onSubmit={(values, { resetForm }) => {
                      console.log("Form data:", values);
                      resetForm();
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="space-y-6">
                        <div
                          id="nameAndEmailDiv"
                          className="flex justify-between w-full flex-col lg:flex-row gap-7"
                        >
                          <div id="namesId" className="w-full">
                            <label className="block text-sm font-serif text-[24px] md:text-[25px] lg:text-[23px] bg-gradient-to-b bg-clip-text bg-transparent text-transparent from-green-950 via-green-800 to-orange-500  ">
                              Full Name
                            </label>
                            <Field
                              type="text"
                              name="name"
                              placeholder="First name & last name"
                              className="w-full lg:px-4 lg:py-2 px-4 py-3.5 mt-1 text-green-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-[22px] placeholder:md:text-[25px] placeholder:lg:text-[17px]  text-[24px] md:text-[25px] lg:text-[17px]"
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="mt-1 lg:text-sm text-2xl text-red-500"
                            />
                          </div>

                          <div id="emailD" className="w-full">
                            <label className="block text-sm font-serif text-[24px] md:text-[25px] lg:text-[23px] bg-gradient-to-b bg-clip-text bg-transparent text-transparent from-green-950 via-green-800 to-orange-500  ">
                              Email Address
                            </label>
                            <Field
                              type="email"
                              name="email"
                              placeholder="you@example.com"
                              className="w-full lg:px-4 lg:py-2 px-4 py-3.5 mt-1 text-green-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-[22px] placeholder:md:text-[25px] placeholder:lg:text-[17px]  text-[24px] md:text-[25px] lg:text-[17px]"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="mt-1 lg:text-sm text-2xl text-red-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-serif text-[24px] md:text-[25px] lg:text-[23px] bg-gradient-to-b bg-clip-text bg-transparent text-transparent from-green-950 via-green-800 to-orange-500  ">
                            Subject
                          </label>
                          <Field
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full lg:px-4 lg:py-2 px-4 py-3.5 mt-1 text-green-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-[22px] placeholder:md:text-[25px] placeholder:lg:text-[17px]  text-[24px] md:text-[25px] lg:text-[17px]"
                          />
                          <ErrorMessage
                            name="subject"
                            component="div"
                            className="mt-1 lg:text-sm text-2xl text-red-500"
                          />
                        </div>

                        <div className="w-full">
                          <label className="block text-sm font-serif text-[24px] md:text-[25px] lg:text-[23px] bg-gradient-to-b bg-clip-text bg-transparent text-transparent from-green-950 via-green-800 to-orange-500  ">
                            Message
                          </label>
                          <Field
                            as="textarea"
                            name="message"
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full px-4 py-2 mt-1 text-green-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-[23px] placeholder:md:text-[25px] placeholder:lg:text-[18px]  text-[24px] md:text-[25px] lg:text-[17px]"
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="mt-1 lg:text-sm text-2xl text-red-500"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-2 text-white transition duration-200 rounded-md bg-gradient-to-r from-green-950 to-green-800 hover:opacity-90 text-[30px] md:text-[25px] lg:text-[20px]"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </section>
            </main>
          </section>


            <section id="ThirdSecmapSecCon" className="mt-[20vh] px-3 lg:px-20">
          <MyMap />
        </section>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
