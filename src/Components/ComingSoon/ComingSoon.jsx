import React from "react";
import "./ComingSoon.css";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png"

const drawerWidth = 340;

function ComingSoon() {
  return (
    <>
        <div className="ComingSoon_main">
            <div className="ComingSoon_main_img_box">
            <img src={logo} alt="logo" />
            </div>
          <div className="ComingSoon_box">
            <h1 className="ComingSoon_box_heading">Coming Soon</h1>
        <hr className="coming_hr" />
          </div>
        </div>
    </>
  );
}

export default ComingSoon;
