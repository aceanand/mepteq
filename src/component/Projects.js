import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import pic1 from "../image/E108p.jpg";
import pic2 from "../image/burzp.png";
import pic3 from "../image/dr.jafarp.jpg";
import pic4 from "../image/ever carep.png";
import pic5 from "../image/g+4p.jpg";
import pic6 from "../image/igip.jpg";
import pic7 from "../image/luxury villap.jpg";
import pic8 from "../image/marinap.jpg";
import pic9 from "../image/metrop.jpg";
import pic10 from "../image/parlep.jpg";
import pic11 from "../image/rectip.jpg";
import pic12 from "../image/sanctp.jpg";
import pic13 from "../image/ucop.jpg";
import pic14 from "../image/wallacep.png";
import pic15 from "../image/weatherfordp.jpg";
import pic16 from "../image/raditionp.png";
import pic17 from "../image/radition2p.png";

function Projects() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <MDBCarousel
            showControls
            showIndicators
            dark
            fade
            className="m-2 p-3"
          >
            <p
              style={{
                backgroundColor: "yellow",
                fontSize: "48px",
                textAlign: "center",
              }}
            >
              Projects:-
            </p>
            <MDBCarouselItem itemId={1}>
              <img
                className="d-block w-100"
                src={pic1}
                alt="First slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  E 108 Karani Villa – Emirates Hills-Dubai
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <img
                className="d-block w-100"
                src={pic2}
                alt="Second slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Apparel Group Outlets in Burj Khalifa Tower
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
              <img
                className="d-block w-100"
                src={pic3}
                alt=""
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Dr. Jafar Khan Villa – E-18 Emirates Hills Dubai
                </p>
              </div>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={5}>
              <img
                className="d-block w-100"
                src={pic5}
                alt="5 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  G +4 Labour Accommodation- DIP- Dubai
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={6}>
              <img
                className="d-block w-100"
                src={pic6}
                alt="6 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  IGI Training Centre -BKC
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={7}>
              <img
                className="d-block w-100"
                src={pic7}
                alt="7 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Luxury Villa at Noira Village – Bardez Taluka
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={8}>
              <img
                className="d-block w-100"
                src={pic8}
                alt="8 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Sugee Developer/SSA/Studio SP- Marina Bay Worli
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={9}>
              <img
                className="d-block w-100"
                src={pic9}
                alt="9 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Metro Station- Nigeria – West Africa
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={10}>
              <img
                className="d-block w-100"
                src={pic10}
                alt="10 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Parle G Conference centre (MEP Design – At Vile Parle - On
                  going)
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={11}>
              <img
                className="d-block w-100"
                src={pic11}
                alt="11 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Rectification and MEP Audit Malik Architecture
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={12}>
              <img
                className="d-block w-100"
                src={pic12}
                alt="12 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Sanctuary Villa’s – Designed by Gauri Khan (At Siolim -Goa,
                  Ongoing)
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={13}>
              <img
                className="d-block w-100"
                src={pic13}
                alt="13 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  UCO Bank
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={14}>
              <img
                className="d-block w-100"
                src={pic14}
                alt="14 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Wallace Pharmaceutical corporate office (MEP Design – At
                  Andheri- East- On going)
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={15}>
              <img
                className="d-block w-100"
                src={pic15}
                alt="15 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Weatherford Oil & Tools – Abu Dhabi
                </p>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={16}>
              <img
                className="d-block w-100"
                src={pic16}
                alt="16 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={17}>
              <img
                className="d-block w-100"
                src={pic17}
                alt="17 slide"
                style={{ width: "700px", height: "600px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p style={{ backgroundColor: "yellow", fontSize: "18px" }}>
                  Designed - Raddison Resort – Bagga Goa (Free to Fly Club) – On
                  going
                </p>
              </div>
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
      </div>
    </div>
  );
}
export default Projects;
