import React from "react";

const Test = () => {
  return (
    <>
      <h1>Nested Lists</h1>
      <h2>Populer Cat Names</h2>
      <div className="">
        <ul>
          <li>
            <h3>Autstalia</h3>{" "}
          </li>

          <ul style={{ listStyle: "number" }}>
            <li>Oscar</li>
            <li>Oscar</li>
            <li>Oscar</li>
            <li>Oscar</li>
            <li>Oscar</li>
          </ul>
        </ul>

        <ul>
          <li>
            <h3>Autstalia</h3>{" "}
          </li>

          <ul style={{ listStyle: "number" }}>
            <li>Oscar</li>
            <li>Oscar</li>
            <li>Oscar</li>
            <li>Oscar</li>
            <li>Oscar</li>
          </ul>
        </ul>
      </div>

      <div className="">
        <h1>Spanning rows and columns</h1>

        <table border="1">
          <thead>
            <th></th>
            <th>Monday</th>
            <th>Thersday</th>
            <th>Wednesday</th>
            <th>Tgursday</th>
            <th>Friday</th>
          </thead>

          <tbody>
            <td>Brackfast</td>
            <td>In rest</td>
            <td>With friend</td>
            <td>In rest</td>
            <td>In rest</td>
            <td>In rest</td>
          </tbody>

          <tbody>
            <td>Morning</td>
            <td colSpan="2">Dsign Trap</td>
            <td colSpan="3">Improve Hideout</td>
          </tbody>

          <tbody>
            <td>Afternoon</td>
            <td>train Minions</td>
            <td>train Minions</td>
            <td>train Minions</td>
            <td>train Minions</td>
            <td rowSpan="2" style={{ padding: "0 0", border: "none" }}>
              World Domination
            </td>
          </tbody>

          <tbody>
            <td>Evening</td>
            <td>Manaical laguer</td>
            <td>Manaical laguer</td>
            <td>Manaical laguer</td>
            <td>Manaical laguer</td>
          </tbody>
        </table>

        <div style={{ display: "flex", marginTop: "20px" }}>
          Username: <input type="text" />
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          Username: <input type="text" />
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <input type="button" value="Register" />
        </div>
      </div>
    </>
  );
};

export default Test;
