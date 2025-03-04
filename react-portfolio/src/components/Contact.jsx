import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section id="Contact">
      <div>
        <p>Contact us</p>
        <img src="..." alt="Fancy underline" />
        <form action="#" method="POST">
          <div>
            <label htmlFor="first-name">Your name</label>
            <div>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <div>
              <textarea id="message" name="message" rows={4} />
            </div>
          </div>
          <button>Send</button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
