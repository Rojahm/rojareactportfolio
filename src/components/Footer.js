const Footer = ({ onClick, theme }) => {
  console.log(theme);
  return (
    <div className="Footer">
      <div className="row">
        <div className="col-10">
          <a
            className="Link"
            href="https://github.com/Rojahm/rojareactportfolio"
          >
            open-scource
          </a>{" "}
          coded by{" "}
          <a
            className="Link"
            href="https://www.linkedin.com/in/roja-h-m-311524233/"
          >
            Ro?a
          </a>
        </div>
        <div className="col-2">
          <button className="btn p-0" onClick={onClick}>
            {theme === "dark" ? "🌈" : "🌑"}
            {console.log(theme)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
