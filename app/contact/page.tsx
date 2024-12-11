export default function Contact() {
    return (
        <section className="contact-us-section">
  <div className="contact-us-container">
    <div className="contact-us-header">
      <h1 className="contact-us-title">
        Contact Us
      </h1>
      <p className="contact-us-description">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
      </p>
    </div>
    <div className="contact-us-form">
      <div className="contact-us-form-row">
        <div className="contact-us-form-field">
          <label htmlFor="name" className="contact-us-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-us-input"
          />
        </div>
        <div className="contact-us-form-field">
          <label htmlFor="email" className="contact-us-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-us-input"
          />
        </div>
        <div className="contact-us-form-field-full">
          <label htmlFor="message" className="contact-us-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-us-textarea"
          ></textarea>
        </div>
        <div className="contact-us-form-submit">
          <button className="contact-us-submit-button">Button</button>
        </div>
      </div>
    </div>
  </div>
</section>
      
      
    
    );
  }