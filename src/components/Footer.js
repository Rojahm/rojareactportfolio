import "./Footer.css";

const Footer = ({ onClick, theme, selectedMenu }) => {
  return (
    <div className="Footer" id={selectedMenu}>
      <div className="row">
        <div className="col-10">
          <a
            className="Link"
            href="https://github.com/Rojahm/rojareactportfolio"
            target="_blank"
            rel="noreferrer"
          >
            open-scource
          </a>{" "}
          coded by{" "}
          <a
            className="Link"
            href="https://www.linkedin.com/in/roja-h-m-311524233/"
            target="_blank"
            rel="noreferrer"
          >
            Ro?a
          </a>
        </div>
        <div className="col-2">
          <button className="btn p-0" onClick={onClick}>
            {theme === "dark" ? "🌈" : "🌑"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
