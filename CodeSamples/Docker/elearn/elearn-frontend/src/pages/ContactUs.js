import React from 'react';
import './ContactUs.css'; // Import custom CSS for styling

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section text-white d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <h1 className="display-2 fw-bold">Contact Us</h1>
          <p className="lead">We'd love to hear from you. Connect with us today!</p>
        </div>
      </div>
      
      {/* Contact Details Section */}
      <div className="container my-5">
        <div className="contact-card card shadow-lg p-4">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Get in Touch</h2>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-3">
                <div className="icon mb-2">
                  <i className="fas fa-envelope fa-2x"></i>
                </div>
                <h5>Email</h5>
                <p>
                  <a href="mailto:info@devopsinsiders.com" className="text-decoration-none">
                    info@devopsinsiders.com
                  </a>
                </p>
              </div>
              <div className="col-md-6 text-center mb-3">
                <div className="icon mb-2">
                  <i className="fas fa-phone fa-2x"></i>
                </div>
                <h5>Phone</h5>
                <p>
                  <a href="tel:+919999988888" className="text-decoration-none">
                    +91-9999988888
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
