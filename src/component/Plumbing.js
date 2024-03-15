import React from "react";
import plumb from "../image/plumb.jpg";
import fire from "../image/fire.jpg";
function Plumbing() {
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
          PLUMBING & FIRE PROTECTION
        </p>

        <ul>
          <li>Water supply</li>
          <li>Drainage & Sewerage system</li>
          <li>Building Plumbing system</li>

          <li>Water filtration and purification system</li>

          <li>Waste water & Sewerage treatment plant.</li>

          <li>RO Plant</li>

          <li>Gas Distribution</li>
          <li> Fire suppression system</li>
          <li>Hydraulic Calculation.</li>
        </ul>
      </div>

      <div className="card-group">
        <div className="card">
          <img
            className="card-img-top mx-auto d-block"
            src={plumb}
            alt="Card image cap"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div className="card pl-6">
          <img
            className="card-img-top mx-auto d-block"
            src={fire}
            alt="Card image cap"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Plumbing;
