import React from 'react'
import Header from "../components/headerFooterComponents/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/headerFooterComponents/Footer";

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout;