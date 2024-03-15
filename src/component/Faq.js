import faqu from "../image/faque.jpg";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

function Faq() {
  return (
    <div style={{ backgroundImage: `url(${faqu})`, textAlign: "center" }}>
      <h1 className="py-5">Frequently Asked Questions</h1>
      <MDBContainer
        className="mt-1"
        style={{ width: "950px", height: "780px" }}
      >
        <MDBAccordion alwaysOpen={false}>
          <MDBAccordionItem collapseId="collapse1" headerTitle="Question #1">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId="collapse2" headerTitle="Question #2">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId="collapse3" headerTitle="Question #3">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId="collapse4" headerTitle="Question #4">
            This is the fourth item's accordion body. It is shown by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance,
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </div>
  );
}

export default Faq;
