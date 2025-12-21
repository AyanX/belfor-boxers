import React, { useState } from "react";
import { Send } from "lucide-react";
import SubHeader from "../../Utils/SubHeader";

const ContactForm = ({ onNotify }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please complete all required fields.");
      }

      onNotify({
        type: "success",
        message:
          "Your message has been received! Our trainers will contact you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      onNotify({
        type: "error",
        message: error.message || "Transmission failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-card">
      <SubHeader
        title="Send Us a Message"
        content="Inquire about memberships, personal training, or facilities."
      />

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Type your detailed message here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? (
            <div className="spinner"></div>
          ) : (
            <>
              Send Message <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
