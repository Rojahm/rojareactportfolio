import { useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";

const Projects = () => {
  const [sites, setSites] = useState({});
  // const [error, setError] = useState();
  const tok = "HIzdHiGenwgtOATwfhAgmAlDfMaV7psTwMJmnf6w_6I";
  const url = "https://api.netlify.com/api/v1/sites";
  const getSites = () => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${tok}`,
        },
      })
      .then((response) => setSites(response.data));
    // .catch((error) => setError(error));
  };
  getSites();
  return (
    <div className="Projects">
      <p>from projects</p>
      <Carousel sites={sites} />
    </div>
  );
};

export default Projects;
