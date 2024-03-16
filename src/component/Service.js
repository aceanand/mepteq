import React from "react";
import bg1 from "../image/abti.jpg";
function Service() {
  return (
    <div className="container " style={{ backgroundColor: "white" }}>
      <h5
        class="text-center mt-5 mb-2 border border-dark "
        style={{ backgroundColor: "yellow" }}
      >
        SERVICES OFFERED & PROJECT CATAGORY
      </h5>

      <div class="row">
        <div class="col-sm-6 mt-5 mb-5 border border-dark ">
          <p className="text-center mt-1 mb-1">SERVICES OFFER </p>
        </div>

        <div class="col-sm-6 mt-5 mb-5 border border-dark ">
          <p className="text-center mt-1 mb-1">PROJECT CATEGORIES</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 border border-dark">
          <ul>
            <li>• HVAC System</li>
            <li>• Plumbing System</li>
            <li>• Mechanical System</li>
            <li>• Refrigeration System</li>
            <li>• Electrical System</li>
            <li>• Energy System</li>
            <li>• Alternate Energy</li>
            <li>• Fire Suppression System</li>
            <li>• Building Management System</li>
            <li>• Data Center</li>
            <li>• Vertical Transportation</li>
          </ul>
        </div>
        <div class="col-sm-6  border border-dark">
          <ul>
            <li>• HOSPITAL</li>
            <li>• HIGH-RISE BUILDING</li>
            <li>• POWER AND COGENERATION </li>
            <li>• PHARMACEUTICALS PLANT</li>
            <li>• INDUSTRIAL BUILDING</li>
            <li>• INSTITUTIONAL BUILDING</li>
            <li>• SHOPPING MALL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
