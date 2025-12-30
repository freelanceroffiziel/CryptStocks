import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { plans } from "../../arraysfolder/plans";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PlansParams = () => {
  const { id } = useParams();
  const selected = plans.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!selected) {
    return <p>Plan not found.</p>;
  }

  const initialValues = {
    amount: "",
    whereToInvest: "",
  };

  const ContactSchema = Yup.object().shape({
    amount: Yup.number()
      .transform((value, originalValue) => {
        if (typeof originalValue === "string") {
          const cleanValue = originalValue.replace(/,/g, "");
          return cleanValue === "" ? NaN : Number(cleanValue);
        }
        return value;
      })
      .typeError("Amount must be a number")
      .required("Amount is required")
      .required("Amount is required")
      .when("whereToInvest", (whereToInvest, schema) => {
        if (whereToInvest === "deposit") {
          return schema
            .min(
              selected.minimumPlan,
              `Minimum ${selected.minimumPlan} for deposit`
            )
            .max(
              selected.maximumPlan,
              `Maximum ${selected.maximumPlan} for deposit`
            );
        } else if (whereToInvest === "profit") {
          return schema
            .min(
              selected.minimumPlan,
              `Minimum ${selected.minimumPlan} for profit`
            )
            .max(
              selected.maximumPlan,
              `Maximum ${selected.maximumPlan} for profit`
            );
        }
        return schema;
      }),
    whereToInvest: Yup.string().required("Please select where to invest from"),
  });

  const formatAmount = (value) => {
    if (!value) return "";
    const number = parseFloat(value.toString().replace(/,/g, ""));
    if (isNaN(number)) return value;
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <main className="lg:mt-[25vh] mt-[20vh] md:mt-[8vh] relative  flex justify-center items-center  ">
      <section className=" text-gray-50 bg-black lg:w-[70%] rounded shadow  lg:py-10 lg:px-14 w-[90%] px-4 py-10  ">
        <div className="w-full relative ">
          <p className="flex flex-row justify-center text-[22px] lg:gap-1.5 md:text-[25px] lg:text-[22px] font-bold">
            {" "}
            <p className="text-orange-700 ">your're</p> about to make an
            investment <p className="text-green-600 lg:mr-0 mr-1.5 ">{selected.planType}</p>{" "}
            plan{" "}
          </p>

          <div className="mt-16 plansParamsForm">
            <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                const formattedAmount = formatAmount(values.amount);
                navigate("/confirm-investment", {
                  state: {
                    investmentData: {
                      ...values,
                      amount: formattedAmount,
                    },
                    plan: selected,
                  },
                });
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-10 w-full flex flex-col justify-center items-center ">
                  <div className="flex flex-col lg:flex-row  w-full gap-5 ">
                    <div className="flex flex-col gap-1 w-full ">
                      <label htmlFor="amount " className="text-[22px] md:text-[25px] lg:text-[16px] font-semibold  ">Amount</label>
                      <Field
                        type="amount"
                        name="amount"
                        autoComplete="on"
                        placeholder="Enter amount"
                        className="bg-gray-100 outline-none rounded-md border-[1px] border-gray-100 lg:py-1.5 py-3.5 pl-1 text-gray-600 placeholder:text-[22px] "
                      />

                      <ErrorMessage
                        name="amount"
                        component="div"
                        className=" lg:text-sm text-2xl text-red-500"
                      />
                      <span className="text-[20px] md:text-[25px] lg:text-[16px] leading-6.5 mt-2 ">
                        {" "}
                        {selected.minimuimPlan} and {selected.maximiumPlan}{" "}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1 justify-center w-full ">
                      <label htmlFor="whereToInvest" className="text-[22px] md:text-[25px] lg:text-[16px] font-semibold  ">
                        Choose place to invest from
                      </label>
                      <Field
                        as="select"
                        id="whereToInvest"
                        name="whereToInvest"
                        className="bg-gray-100 outline-none rounded-md border-[1px] border-gray-100 lg:py-1.5 py-3.5 pl-1 text-gray-900 text-[23px] md:text-[25px] lg:text-[17px] "
                      >
                        <option className="text-[14px] md:text-[25px] lg:text-[17px]" value="">Choose where to invest from</option>
                        <option className="text-[14px] md:text-[25px] lg:text-[17px]" value="deposit balance">Deposit Balance</option>
                        <option className="text-[14px] md:text-[25px] lg:text-[17px]" value="profit balance">Profit Balance</option>
                      </Field>
                      <ErrorMessage
                        name="whereToInvest"
                        component="div"
                        className=" lg:text-sm text-2xl text-red-500"
                      />
                      <span className=" text-[20px] md:text-[25px] lg:text-[16px] leading-6.5 mt-2  ">
                        {" "}
                        {selected.investSpan.EarnPercent}{" "}
                        {selected.investSpan.moneyback}{" "}
                        {selected.investSpan.yesAns}{" "}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 text-white bg-gray-800 hover:bg-gray-900 shadow transition duration-200 rounded-md  hover:opacity-100 px-3.5 text-[30px] md:text-[25px] lg:text-[20px]  "
                  >
                    {isSubmitting ? "Processing..." : "Continue"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlansParams;
