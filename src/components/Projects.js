import { useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";

const Projects = () => {
  const [sites, setSites] = useState({});
  const [ready, setReady] = useState(false);
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
      .then((response) => {
        setReady(true);
        console.log(response.data);
        setSites(response.data);
      });
    // .catch((error) => setError(error));
  };

  if (!ready) {
    getSites();
  }

  return (
    <div className="Projects">
      <p>from projects</p>
      <Carousel sites={sites} ready={ready} />
    </div>
  );
};

export default Projects;
