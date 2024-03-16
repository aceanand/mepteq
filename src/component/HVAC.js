import React from "react";
import bh1 from "../image/wood.jpg";
import chilled1 from "../image/CW.png";
import chilled2 from "../image/CW2.jpg";
function HVAC() {
  return (
    <div
      className="my-3 mx-3"
      style={{ backgroundImage: `url(${bh1})`, color: "white" }}
    >
      <div className="text-container">
        <p
          style={{
            backgroundColor: "yellow",
            fontSize: "58px",
            textAlign: "center",
            color: "orangered",
          }}
        >
          HVAC SYSTEM
        </p>
        <p>
          Having an own experience of over 23 years, for diversified customer
          needs, we follow the guidelines of ASHRAE for the HVAC system designs.
          The system design includes but not limited to:
        </p>
        <ul>
          <li>
            Specialized Air-Conditioning for Clean Rooms, Operation Theaters,
            etc.
          </li>
          <li> VRV Air-Conditioning Systems</li>
          <li>Central Air-Conditioning Systems</li>

          <li>Chilled Water Systems</li>

          <li>Industrial Ventilation & Exhaust</li>

          <li> Building Management Systems</li>
        </ul>
      </div>

      <div className="card-group">
        <div className="card">
          <img
            className="card-img-top mx-auto d-block"
            src={chilled1}
            alt="Card image cap"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div className="card pl-6">
          <img
            className="card-img-top mx-auto d-block"
            src={chilled2}
            alt="Card image cap"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HVAC;
