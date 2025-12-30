import { Form, Formik } from "formik";
import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ConfirmInvestment = () => {
  const location = useLocation();
  const { investmentData, plan } = location.state || {};

  if (!investmentData || !plan) {
    return <Navigate to="/plans" replace />;
  }

  const handleSubmit = (values) => {
    console.log("Submiting confirmed investment", values);
  };

  return (
    <main className="lg:mt-[25vh] mt-[20vh] md:mt-[8vh] flex flex-col justify-center items-center w-full px-6 lg:px-10  ">
      <section className="bg-gray-50 flex flex-col justify-center items-center  gap-6 lg:py-10 px-6 py-10  lg:w-[60%] w-full rounded shadow ">
        <h2 className="text-[39px] leading-10.5 lg:leading-6.5 md:text-[25px] lg:text-[30px] font-bold text-gray-800 font-serif ">
          Confirm Your Investment
        </h2>

        <Formik
          initialValues={{
            planType: plan.planType,
            amount: investmentData.amount,
            whereToInvest: investmentData.whereToInvest,
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="w-full flex flex-col gap-4 items-center">
              <div className="leading-8 lg:leading-6.5 ">
                <p className="text-green-700 font-bold text-[25px] md:text-[25px] lg:text-[20px]  ">
                  <strong className="text-gray-950 font-semibold">Plan:</strong>{" "}
                  {plan.planType}
                </p>
                <p className="text-green-700 font-bold  text-[25px] md:text-[25px] lg:text-[20px] ">
                  {" "}
                  <strong className="text-gray-950 font-semibold ">
                    {" "}
                    Amount:
                  </strong>{" "}
                  ${investmentData.amount}
                </p>
                <p className="text-green-700 font-bold text-[25px] md:text-[25px] lg:text-[20px] ">
                  <strong className="text-gray-950 font-semibold">
                    Invest from:
                  </strong>{" "}
                  {investmentData.whereToInvest}
                </p>
              </div>

              <button className="py-2 text-gray-600 hover:text-gray-50 bg-gray-200 hover:bg-gray-900 shadow transition duration-200 rounded-md  hover:opacity-100 px-3.5 text-[30px] md:text-[25px] lg:text-[20px] mt-4 lg:mt-6 ">
                Confirm
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default ConfirmInvestment;
