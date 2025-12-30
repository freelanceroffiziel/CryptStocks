import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Feeds from "./pages/Feeds";
import Plans from "./pages/Plans";
import Error from "./errors/Error";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./features/dashboard/Dashboard";
import AdminDashboard from "./features/admin/AdminDashboard";
import ContactUs from "./pages/ContactUs";
import PlansParams from "./Params/plansparams/PlansParams";
import ConfirmInvestment from "./Params/ConfirmInvestFolder/ConfirmInvestment";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/About" element={<About />} />
            <Route path="/Feeds" element={<Feeds />} />
            <Route path="/Plans" element={<Plans />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            {/* params */}
            <Route path="/plans/:id" element={<PlansParams/>} />
            <Route path="/confirm-investment" element={<ConfirmInvestment/>} />
          </Route>
          {/* USERDASHBOARD */}
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/Dashboard" element={<Dashboard/>} />
          </Route>
          {/* ADMINDASHBOARD */}
          <Route path="/" element={<AdminDashboard />}>
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
          </Route>
          {/* ERROR PAGES */}
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
