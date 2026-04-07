import React from 'react';

function Contact() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contact Us</h1>

      <p>Email: trisha.23cs176@sode-edu.in</p>
      <p>Phone: +91 8762113569</p>

      <h3>Send a Message</h3>
      <form>
        <input type="text" placeholder="Your Name" /><br /><br />
        <input type="email" placeholder="Your Email" /><br /><br />
        <textarea placeholder="Your Message"></textarea><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
