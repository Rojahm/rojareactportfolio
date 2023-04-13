import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Carousel = ({ sites, ready }) => {
  const options = {
    loop: true,
    margin: 10,
    center: true,
    nav: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1.5,
      },
      1000: {
        items: 2,
      },
    },
  };
  if (ready) {
    return (
      <div className="Carousel">
        <OwlCarousel className="owl-theme" {...options}>
          {sites.map((site) => {
            return (
              <div className="item">
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={site.screenshot_url}
                    alt={site.name}
                  />
                  <div className="card-title">
                    <a href={site.ssl_url}>
                      {site.name.split("-").slice(0, 2).join(" ") + "!"}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    );
  } else {
    return (
      <>
        <p>Loading...</p>
        <ClimbingBoxLoader className="Load" color="#36d7b7" />
      </>
    );
  }
};

export default Carousel;
