import React from "react";
import "./contact.css";

//React Icon
import { BsInstagram, BsMessenger, BsWhatsapp } from "react-icons/bs";

// Animation
import { Fade, Bounce } from "react-awesome-reveal";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_bb6brlt", "template_ud8ouyo", form.current, "kxJqQs-12oggKzcan");
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container-section">
        <Fade triggerOnce direction="down">
          <h2 className="contact-title">Kontak Kami</h2>
        </Fade>

        <div className="item-wrap">
          <div className="left">
            <Bounce cascade triggerOnce>
              <button className="left-item" onClick={() => window.open("http://wa.me/6282178888687", "_blank")}>
                <BsWhatsapp className="icon" />
                <h5>WhatsApp</h5>
                <div className="small-wrap">
                  <div className="send">Tap to Message</div>
                </div>
              </button>

              <button className="left-item" onClick={() => window.open("https://www.facebook.com/multi.n.property", "_blank")}>
                <BsMessenger className="icon" />
                <h5>Messenger</h5>
                <div className="small-wrap">
                  <div className="send">Tap to Message</div>
                </div>
              </button>

              <button className="left-item" onClick={() => window.open("https://www.instagram.com/multiniagaproperty/", "_blank")}>
                <BsInstagram className="icon" />
                <h5>Instagram</h5>
                <div className="small-wrap">
                  <div className="send">Tap to Message</div>
                </div>
              </button>
            </Bounce>
          </div>

          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <input className="input" type="text" name="name" placeholder="Full Name" required autoComplete="off" />
            <input className="input" type="email" name="email" placeholder="Email" required autoComplete="off" />
            <textarea className="text_area" name="message" rows="7" placeholder="Message" required></textarea>
            <button className="button" type="submit">
              Send Messages
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
