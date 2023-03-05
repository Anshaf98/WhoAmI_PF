import React from "react";
import ReactCompareImage from "react-compare-image";
import "./View.css";

const View = () => {
  return (
    <div className="view">
      <div className="left">
        <span>View Try-On</span>
        <span>New One</span>
        <span>Try Now!</span>
      </div>

      <div className="right">
        <div className="wrapper1">
          <ReactCompareImage
            leftImage="https://res.cloudinary.com/dpakxje91/image/upload/v1667897380/s1_zmyqwe.png"
            rightImage="https://res.cloudinary.com/dpakxje91/image/upload/v1667897380/s2_isch5l.png"
          />
        </div>
      </div>
    </div>
  );
};

export default View;
