import React, { useState } from "react";
import { Data1 } from "../../dummyData";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import "./Project.css";

const Project = () => {
  const [animationParent] = useAutoAnimate();

  const [menuProject, setMenuProject] = useState(Data1);

  const filter = (type) => {
    setMenuProject(Data1.filter((p) => p.type === type));
  };

  return (
    <div className="container2">
      <h1>Our Projects</h1>

      <div className="projects">
        <ul className="menu1">
          <li onClick={() => setMenuProject(Data1)}>All</li>
          <li onClick={() => filter("fe")}>Frontend Only (FE)</li>
          <li onClick={() => filter("FE&BE")}>
            Frontend And Backend (FE & BE)
          </li>
        </ul>

        <div className="list" ref={animationParent}>
          {menuProject.map((p) => (
            <div className="project">
              <div className="left-side">
                <div className="name">
                  <span>{p.name}</span>
                  <span>{p.desc}</span>
                </div>
                <div>VIEW NOW</div>
              </div>

              <img src={p.img1} alt="" className="img-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
