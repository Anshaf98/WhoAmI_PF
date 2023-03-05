import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="container1">
      <div className="homeSides">
        <span className="text1">FRONTEND AND BACKEND</span>

        <div className="text2">
          <span>MF.Mohamed Anshaf</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste
            nam cumque quasi? Repellendus quibusdam debitis temporibus explicabo
          </span>
        </div>
      </div>

      <div className="wrapper">
        <motion.img
          initial={{ bottom: "4rem" }}
          whileInView={{ bottom: "0" }}
          transition={transition}
          src="https://res.cloudinary.com/dpakxje91/image/upload/v1664467116/l0zgjvwgi5egrn4js2q9.jpg"
          alt=""
          width={200}
          height={400}
          style={{ objectFit: "cover", borderRadius: "5px" }}
        />
      </div>

      <div className="homeSides">
        <div className="traffic">
          <span>20k</span>
          <span>Monthly Traffic</span>
        </div>

        <div className="customers">
          <span>1k</span>
          <span>Happy Viewers</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
