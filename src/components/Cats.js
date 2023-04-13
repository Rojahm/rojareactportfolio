import "./Cats.css";

const Cats = () => {
  return (
    <div className="Cats">
      <h1>
        See my <span className="Title">Cats</span>
      </h1>
      <div className="container row justify-content-evenly">
        <div className="col-sm align-self-end mb-3">
          <h2>Mighty Makhmal</h2>
          <div>
            <img
              className="rounded my-3"
              src="../img/makhmal.png"
              alt="Mighty Makhmal"
              width="200px"
            />
          </div>
          <div>
            <a
              className="Link"
              href="https://graceful-marigold-c50fbd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button>About Makhmal!</button>
            </a>
          </div>
        </div>
        <div className="col-sm align-self-end mb-3">
          <h2>Silly Shalil</h2>
          <div>
            <img
              className="rounded my-3"
              src="../img/shalil.png"
              alt="Silly Shalil"
              width="200px"
            />
          </div>
          <div>
            <a
              className="Link"
              href="https://leafy-puffpuff-b9b541.netlify.app/"
              target="_blank"
              rel="noreferrer"
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
