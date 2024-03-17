import React from "react";
import "../style/Product.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
function Product() {
  return (
    <div
      className="table-responsive"
      style={{ margin: "20px", padding: "10px" }}
    >
      <p
        style={{
          backgroundColor: "yellow",
          fontSize: "48px",
          textAlign: "center",
        }}
      >
        Project associated designed/Executed.
      </p>
      <MDBTable>
        <MDBTableHead>
          <tr className="table-dark">
            <th scope="col">S.N.</th>
            <th scope="col">PROJECT NAME</th>
            <th scope="col">StatusArchitect /Designer</th>
            <th scope="col">Architect /Designer</th>
            <th scope="col">Project/City</th>
            <th scope="col">Type of Project</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr className="table-danger">
            <th scope="row">1</th>
            <td className="fs-1rem">Sactuary Executive Villa </td>
            <td className="fs-1rem">On going</td>
            <th scope="col">Mrs Gauri Khan</th>
            <th scope="col">110000 (Sqft)/Goa </th>
            <th scope="col">Luxury Villa</th>
          </tr>

          <tr className="table-primary">
            <th scope="row">2</th>
            <td>Sugee Developer- Marina Bay- Worli</td>
            <td>On going</td>
            <th scope="col">SSA/Studio Architect </th>
            <th scope="col">44 Storey</th>
            <th scope="col">High Rise Resi</th>
          </tr>
          <tr className="table-secondary">
            <th scope="row">3</th>
            <td>
              Commercial office - HQ Wallace pharmaceutical - Andheri (East)
            </td>
            <td>On going</td>
            <th scope="col">Wedesign</th>
            <th scope="col">1 Lac Sqft</th>
            <th scope="col">6 Storey Bldg.</th>
          </tr>
          <tr className="table-success">
            <th scope="row">4</th>
            <td>Parle G - Factory </td>
            <td>On going</td>
            <th scope="col">(SR+A) & (Exigo)</th>
            <th scope="col">58 Lac Sqft</th>
            <th scope="col">Town ship</th>
          </tr>
          <tr className="table-danger">
            <th scope="row">5</th>
            <td>Raddison Hotel (free to fly Club)</td>
            <td>On going</td> <th scope="col">TAO (Ashish Kampli)</th>
            <th scope="col">Bagga, Goa</th>
            <th scope="col">Hotels/Resort</th>
          </tr>
          <tr className="table-warning">
            <th scope="row">6</th>
            <td>
              Burj Khalif Tower- All outlets for Apparel group - Aldo,
              Coldstone, H & M, etc
            </td>
            <td>Completed</td>
            <th scope="col">Direct client.</th>
            <th scope="col">More than 25 outlets </th>
            <th scope="col">Fitouts</th>
          </tr>
          <tr className="table-info">
            <th scope="row">7</th>
            <td>IF BE AT FORT</td>
            <td>On going</td>
            <th scope="col">Kamal Architecturer</th>
            <th scope="col">Multi Function </th>
            <th scope="col">MEP Audit</th>
          </tr>
          <tr className="table-light">
            <th scope="row">8</th>
            <td>Executive twin Villa - Noira</td>
            <td>On going</td>
            <th scope="col">Studio Archtype </th>
            <th scope="col">16000 Sqft/Goa</th>
            <th scope="col">Luxury Villa</th>
          </tr>
          <tr className="table-danger">
            <th scope="row">9</th>
            <td>Lalit Karani Villa- Emirates Hill - Dubai</td>
            <td>Completed</td>
            <th scope="col">Talathy & Panthaky</th>
            <th scope="col">11000 Sqft</th>
            <th scope="col">Luxury Villa</th>
          </tr>
          <tr className="table-primary">
            <th scope="row">10</th>
            <td> Dr. Jafar Khan villa- Emirates Hill- Dubai</td>
            <td>Completed </td>
            <th scope="col">LWD (Dubai)</th>
            <th scope="col">22500 Sqft</th>
            <th scope="col">Luxury Villa</th>
          </tr>
          <tr className="table-secondary">
            <th scope="row">11</th>
            <td>Metro Station - Yaba- West Africa</td>
            <td>Completed</td>
            <th scope="col">Philips Project Centre</th>
            <th scope="col">130000 Sqft</th>
            <th scope="col">Metro Station</th>
          </tr>

          <tr className="table-success">
            <th scope="row">12</th>
            <td>Westcare Hospital</td>
            <td>Completed</td>
            <th scope="col">Philips Project Centre</th>
            <th scope="col">72000 Sqft</th>
            <th scope="col">Hospital</th>
          </tr>

          <tr className="table-danger">
            <th scope="row">13</th>
            <td>Lugard Avenue</td>
            <td>Completed</td>
            <th scope="col">Philips Project Centre</th>
            <th scope="col">60000 Sqft</th>
            <th scope="col">High Rise Resi</th>
          </tr>

          <tr className="table-warning">
            <th scope="row">14</th>
            <td>IGI Centre - BKC</td>
            <td>Completed</td>
            <th scope="col">Sanjay Baikerkar</th>
            <th scope="col">4000 Sqft</th>
            <th scope="col">Comm. Office</th>
          </tr>

          <tr className="table-info">
            <th scope="row">15</th>
            <td>Air craft Hanger- Oman</td>
            <td>Completed</td>
            <th scope="col">MOD</th>
            <th scope="col">475000 Sqft</th>
            <th scope="col">Air craft hanger</th>
          </tr>

          <tr className="table-light">
            <th scope="row">16</th>
            <td>Warehouse - Wudam - Oman</td>
            <td>Completed</td>
            <th scope="col">MOD</th>
            <th scope="col">125000 Sqft</th>
            <th scope="col">Warehouse</th>
          </tr>

          <tr className="table-success">
            <th scope="row">17</th>
            <td>Weatherford oil tools- Abu Dhabi</td>
            <td>Completed</td>
            <th scope="col">SPEC</th>
            <th scope="col">245000 Sqft</th>
            <th scope="col">Oil & Gas</th>
          </tr>
          <tr className="table-danger">
            <th scope="row">18</th>
            <td>Lubrication Plant- Nigeria</td>
            <td>Completed</td>
            <th scope="col">North West Petroleum </th>
            <th scope="col">35000 Sqft</th>
            <th scope="col">Oil & Gas</th>
          </tr>

          <tr>
            <th scope="row">19</th>
            <td>Dinesh Moorjani Luxury VillaEmirates Hills Dubai</td>
            <td>Completed</td>
            <th scope="col">Archtect</th>
            <th scope="col">12500 Sqft</th>
            <th scope="col">Luxury Villa</th>
          </tr>
          <tr className="table-primary">
            <th scope="row">20</th>
            <td>2 +G + 10 storey Building - Al Barsha- Dubai</td>
            <td>Completed</td>
            <th scope="col">Chirag Contracting</th>
            <th scope="col">65000 Sqft</th>
            <th scope="col">High Rise Resi.</th>
          </tr>

          <tr className="table-secondary">
            <th scope="row">21</th>
            <td>Lalit Karani Villa- Emirates Hill - Dubai</td>
            <td>Completed</td>
            <th scope="col">Archtect</th>
            <th scope="col">11000 Sqft</th>
            <th scope="col">Luxury Villa</th>
          </tr>

          <tr className="table-warning">
            <th scope="row">22</th>
            <td>Times of India - Kandivli</td>
            <td>Completed</td>
            <th scope="col">Batliboi</th>
            <th scope="col">Factory</th>
            <th scope="col">Factory</th>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
export default Product;
