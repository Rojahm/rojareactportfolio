import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>
        How to <span className="Title">Contact</span> me
      </h1>
      <div className="container">
        <p>
          I’m interested in freelance opportunities. If you have other requests
          or questions, don’t hesitate to contact me.
        </p>
        <ul className="contact-list">
          <li>
            <a className="Link" href="mailto:s.roja.h.m@gmail.com">
              📧email: s.roja.h.m@gmail.com
            </a>
          </li>
          <li>
            <a className="Link" href="https://github.com/Rojahm">
              🐱github: @Rojahm
            </a>
          </li>
          <li>
            <a className="Link" href="https://www.instagram.com/rojadoesnt">
              📷instagram: @rojadoesnt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
