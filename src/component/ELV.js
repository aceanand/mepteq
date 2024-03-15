import React from "react";
import elec1 from "../image/elect.png";
import elec2 from "../image/elv.jpg";
function ELV() {
  return (
    <div>
      <div className="text-container">
        <p
          style={{
            backgroundColor: "yellow",
            fontSize: "48px",
            textAlign: "center",
          }}
        >
          ELECTRICAL & ELV SYSTEM
        </p>

        <ul>
          <li>Lighting Distribution</li>
          <li>Power Distribution</li>
          <li>Power Generation</li>

          <li>Chilled Water Systems</li>

          <li>Fire & Security Alarm System</li>

          <li> Communication system</li>

          <li> CCTV.</li>
          <li> Structural Cabling</li>
          <li>Access Control</li>
          <li> Building Management System</li>
          <li> Electrical Safety Audit</li>
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
