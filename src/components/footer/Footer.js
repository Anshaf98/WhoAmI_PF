import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { AiOutlineLogin, AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <hr />
      <div className="footer">
        <div className="logo1">
          <img
            src="https://res.cloudinary.com/dpakxje91/image/upload/v1666016162/a_bk5msv.png"
            alt=""
          />
          <span>Mohamed</span>
        </div>

        <div className="block">
          <div className="detail">
            <span>Contact us</span>
            <span className="icon01">
              <CiLocationArrow1 className="icon" />
              <span>Kinniya</span>
            </span>
            <span className="icon01">
              <AiOutlineMail className="icon" />
              <span>me@gmail.com</span>
            </span>
            <span className="icon01">
              <BsFillTelephoneInboundFill className="icon" />
              <span>0123456789</span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Account</span>
            <span className="icon01">
              <AiOutlineLogin className="icon" />
              <span>SignIn</span>
            </span>
            <span className="icon01">
              <AiOutlineLogin className="icon" />
              <span>SignUp</span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Links</span>
            <span className="icon01">
              <AiOutlineLink className="icon" />
              <span>About us</span>
            </span>
            <span className="icon01">
              <AiOutlineLink className="icon" />
              <span>Project</span>
            </span>
            <span className="icon01">
              <AiOutlineLink className="icon" />
              <span>Contact us</span>
            </span>
          </div>
        </div>
      </div>

      <div className="copy">
        <span>&copy; Copyright 2022 by Mohamed</span>
      </div>
    </div>
  );
};

export default Footer;
