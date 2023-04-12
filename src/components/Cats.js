const Cats = () => {
  return (
    <div className="Cats">
      <h1>See my Cats</h1>
      <div className="container d-flex justify-content-evenly">
        <div>
          <h2>Mighty Makhmal</h2>
          <img
            className="rounded my-3"
            src="https://raw.githubusercontent.com/Rojahm/portfolio-4/main/img/makhmal.png"
            alt="Mighty Makhmal"
            width="200px"
          />
          <p>About Makhmal!</p>
        </div>
        <div>
          <h2>Silly Shalil</h2>
          <img
            className="rounded my-3"
            src="https://raw.githubusercontent.com/Rojahm/portfolio-4/main/img/shalil-profile.png"
            alt="Silly Shalil"
            width="200px"
          />
          <p>About Shalil!</p>
        </div>
      </div>
    </div>
  );
};

export default Cats;
