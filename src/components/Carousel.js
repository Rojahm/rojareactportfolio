import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel = ({ sites }) => {
  return (
    <>
      <OwlCarousel className="owl-theme" loop margin={10} nav center>
        {sites.map((site, i) => (
          <div className="item">
            <h4 key={i}>{site.name}</h4>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default Carousel;
