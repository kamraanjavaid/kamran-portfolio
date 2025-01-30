import React from "react";
import "./Contact.css";  // Make sure to style accordingly

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a2f4ddb8-9c49-40ad-94d0-adb4e52efc58");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">
        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              id="name"
              required
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="message">Write your message</label>
            <textarea
              placeholder="Enter your message"
              rows="8"
              name="message"
              id="message"
              required
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/kamran-javaid-37baa626a/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/kamraanjavaid" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:khaankamran.121@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
