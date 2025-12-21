import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Notification from "./Notification";
import "./Form.scss"
const Form = () => {
  const [notification, setNotification] = useState({
    type: null,
    message: "",
  });

  const handleNotify = (state) => {
    setNotification(state);
  };

  const clearNotification = () => {
    setNotification({ type: null, message: "" });
  };

  return (
    <main className="app-container" id="contact">
      {notification.type && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={clearNotification}
        />
      )}

      <ContactForm onNotify={handleNotify} />
    </main>
  );
};

export default Form;
