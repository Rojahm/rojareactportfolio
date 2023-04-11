import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel = ({ sites, ready }) => {
  if (ready) {
    return (
      <>
        <OwlCarousel className="owl-theme" loop margin={10} nav center>
          <div className="item">
            <h4>1{sites[0].name}</h4>
          </div>
        </OwlCarousel>
      </>
    );
  } else {
    return <p>Loadin</p>;
  }
};

export default Carousel;
