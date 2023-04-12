import "./Cats.css";

const Cats = () => {
  return (
    <div className="Cats">
      <h1>
        See my <span className="Title">Cats</span>
      </h1>
      <div className="container d-flex justify-content-evenly">
        <div className="align-self-end">
          <h2>Mighty Makhmal</h2>
          <div>
            <img
              className="rounded my-3"
              src="https://raw.githubusercontent.com/Rojahm/portfolio-4/main/img/makhmal.png"
              alt="Mighty Makhmal"
              width="200px"
            />
          </div>
          <div>
            <a
              className="Link"
              href="https://graceful-marigold-c50fbd.netlify.app/"
            >
              <button>About Makhmal!</button>
            </a>
          </div>
        </div>
        <div className="align-self-end">
          <h2>Silly Shalil</h2>
          <div>
            <img
              className="rounded my-3"
              src="https://raw.githubusercontent.com/Rojahm/portfolio-4/main/img/shalil-profile.png"
              alt="Silly Shalil"
              width="200px"
            />
          </div>
          <div>
            <a
              className="Link"
              href="https://leafy-puffpuff-b9b541.netlify.app/"
            >
              <button>About Shalil!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cats;
