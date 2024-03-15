import React from "react";
import "../style/About.css";
import Abou from "../image/aboutimg.jpg";
import Ab from "../image/abti.jpg";
function About() {
  return (
    <div>
      <div
        className="about-us-container"
        style={{ backgroundImage: `url(${Ab})` }}
      >
        <div className="text-container">
          <h2>About Us</h2>
          <p>
            Mepteq Global Engineering & Consultancy is a multi-task Design and
            engineering consultancy firm founded by Mr. Devendra P Dhake, who
            has been working for over two decades in the field of building
            services and has vast exposure to various kinds of projects
            including Hotels, Institutional, Commercial, Residential,
            Industrial, heath Industries in Middle East, India & Africa, and
            successfully completed many projects across these countries. He has
            served in some good projectoriented organizations like -PPC Limited,
            Nigeria (affiliate of Philips Electronics N.V. of the Netherlands).
            Batliboi Limited.
          </p>
          <ul>
            <li>Studies, Reports, Investigations, Surveys & Evaluations</li>
            <li>Cost Estimation & Feasibilities</li>
            <li>Detailed Designs & Drawings</li>

            <li>
              Documentation for Tender, Specifications, Bill of Quantities
            </li>

            <li>Scrutiny & Analysis of Bids</li>

            <li>Supervision & Management of Construction or Contracts</li>

            <li>Quality Control, Testing & Commissioning</li>
          </ul>
        </div>
        <div className="image-container">
          <img src={Abou} alt="" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
export default About;
