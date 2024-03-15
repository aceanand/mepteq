import React from "react";
import conta from "../image/cont.jpg";
function Contact() {
  return (
    <div className="my-1 mx-1" style={{ backgroundImage: `url(${conta})` }}>
      <form className="text-center border border-light p-5" action="#!">
        <h1 className="mb-4 text-white">Contact us</h1>

        <input
          type="text"
          id="defaultContactFormName"
          className="form-control mb-2"
          placeholder="Name"
        />

        <input
          type="email"
          id="defaultContactFormEmail"
          className="form-control mb-2"
          placeholder="E-mail"
        />

        <div className="form-group">
          <textarea
            class="form-control rounded-0"
            id="exampleFormControlTextarea2"
            rows="2"
            placeholder="Message"
          ></textarea>
        </div>

        <button className="btn btn-info btn-block my-2" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
