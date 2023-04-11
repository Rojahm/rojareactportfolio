import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel = ({ sites, ready }) => {
  const options = {
    loop: true,
    center: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    resposive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      900: {
        items: 5,
      },
    },
  };
  if (ready) {
    return (
      <div className="Carousel">
        <OwlCarousel className="owl-theme" {...options}>
          {sites.map((site) => {
            return (
              <div className="item mx-3 rounded">
                <a href={site.ssl_url}>
                  <img
                    className="mb-3"
                    src={site.screenshot_url}
                    alt={site.name}
                  />
                </a>
                <h4>{site.name.split("-").slice(0, 2).join(" ") + "!"}</h4>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    );
  } else {
    return <p>Loadin</p>;
  }
};

export default Carousel;
