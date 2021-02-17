import React from "react";
import img from "./../../Assets/images/Group 11091.png";
import ContactForm from "./../../components/Utils/ContactForm/ContactForm";
import Help from "./../../components/Utils/Help/Help";
import Questions from "./../../components/Questions/Questions";

const ContactScreen = () => {
  return (
    <>
      <img src={img} alt="banner" style={{ width: "100%" }} />
      <div style={{ marginTop: "8%" }}>
        <Help />
      </div>
      <div style={{ marginTop: "5%" }}>
        <Questions />
      </div>
      <div style={{ marginTop: "10%" }}>
        <ContactForm />
      </div>
    </>
  );
};
export default ContactScreen;
