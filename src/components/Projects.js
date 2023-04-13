import Carousel from "./Carousel";
import "./Projects.css";

const Projects = ({ sites, ready }) => {
  return (
    <div className="Projects">
      <h1>
        See my <span className="Title">Work</span>
      </h1>
      <div className="container">
        <Carousel sites={sites} ready={ready} />
      </div>
    </div>
  );
};

export default Projects;
