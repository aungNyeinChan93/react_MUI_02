import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/base/Navbar";

const MainLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default MainLayout;
