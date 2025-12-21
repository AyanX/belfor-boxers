import React from "react";
import ContactCard from "./ContactCard";
import "./Contact.scss";
import SubHeader from "../Utils/SubHeader";
import Facility from "./Facility/Facility";
import Form from "./Form/Form";
const CONTACT_DATA = [
  {
    id: "1",
    type: "LOCATION",
    title: "LOCATION",
    details: [
      "Kampala, Uganda",
      "Central Business District",
      "Near National Stadium",
    ],
  },
  {
    id: "2",
    type: "PHONE",
    title: "PHONE",
    details: ["+256 XXX XXX XXX", "+256 XXX XXX XXX", "Mon - Sat: 6AM - 9PM"],
  },
  {
    id: "3",
    type: "EMAIL",
    title: "EMAIL",
    details: [
      "info@uncletboxing.com",
      "training@uncletboxing.com",
      "We reply within 24 hours",
    ],
  },
];

const Contact = () => {
  console.log("CONTACT PAGE RENDERED")
  return (
    <>
    <div>
      <section className="container-contact">
        <SubHeader
          title="Get in Touch"
          content="Whether you have questions about our training programs, membership options, or anything else, we're here to help. Reach out to us through any of the following methods."
        />

        <div className="cards-grid">
          {CONTACT_DATA.map((info) => (
            <ContactCard key={info.id} info={info} />
          ))}
        </div>
      </section>
    </div>
    <Form/>
    <Facility />
    </>
  );
};

export default Contact;
