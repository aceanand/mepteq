import React from "react";
import elec1 from "../image/elect.png";
import elec2 from "../image/elv.jpg";
import electricity from "../image/pngtree-crane-industry-lifting-device-device-background-picture-image_181914.jpg";
function ELV() {
  return (
    <div className="my-3 mx-3">
      <div
        className="text-container"
        style={{
          backgroundImage: `url(${electricity})`,
          height: "28rem",
          backgroundSize: "cover",
          color: "black",
        }}
      >
        <p
          style={{
            backgroundColor: "yellow",
            color: "black",
            fontSize: "48px",
            textAlign: "center",
          }}
        >
          ELECTRICAL & ELV SYSTEM
        </p>

        <ul>
          <li>
            <font size="6">Lighting Distribution</font>
          </li>
          <li>
            <font size="6">Power Distribution</font>
          </li>
          <li>
            {" "}
            <font size="6">Power Generation</font>
          </li>

          <li>
            {" "}
            <font size="6">Chilled Water Systems</font>
          </li>

          <li>
            {" "}
            <font size="6">Fire & Security Alarm System</font>
          </li>

          <li>
            {" "}
            <font size="6"> Communication system</font>
          </li>

          <li>
            <font size="6"> CCTV.</font>
          </li>
          <li>
            <font size="6"> Structural Cabling</font>
          </li>

          <li>
            <font size="6">Access Control</font>
          </li>
        </ul>
      </div>

      <div className="card-group">
        <div className="card">
          <img
            className="card-img-top mx-auto d-block"
            src={elec1}
            alt="Card image cap"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div className="card pl-6">
          <img
            className="card-img-top mx-auto d-block"
            src={elec2}
            alt="Card image cap"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ELV;
