import React from "react";

const ContactForm = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#fafbfc",
      }}
    >
      <h1 className="text-center pt-5">Contact Form</h1>
      <div class="row g-3 align-items-center pt-5 justify-content-center">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Email Address"
            style={{ width: "300px" }}
          />
        </div>
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div class="row g-3 align-items-center mt-2 justify-content-center">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Subject here"
            style={{ width: "617px" }}
          />
        </div>
      </div>
      <div class="row g-3 align-items-center mt-2 justify-content-center">
        <div class="col-auto">
          <textarea
            type="text"
            class="form-control"
            placeholder="Let us know how we can help you!"
            style={{ width: "617px", height: "100px" }}
          />
        </div>
      </div>
      <div class="row g-3 align-items-center mt-2 justify-content-center">
        <div class="col-auto">
          <button
            type="button"
            style={{
              backgroundColor: "#0a2c66",
              color: "white",
              width: "150px",
              height: "40px",
              borderRadius: "5px",
              justifyContent: "center",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
