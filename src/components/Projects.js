import axios from "axios";
import Carousel from "./Carousel";

const Projects = () => {
  // const redirectUrl = "https://sparkly-mermaid-d9b96d.netlify.app/";
  const tok = "HIzdHiGenwgtOATwfhAgmAlDfMaV7psTwMJmnf6w_6I";
  // const clientId = "bnjmMi_LH_C98kBnMB38oMeJnYsuNiztNTnW-FNhIZA";
  // const clientScrt = "YvwrBrdjYXcNz5YIsTR7E4Ba7Q9NaJGoJ3Ah7Rbi7m8";
  const url = "https://api.netlify.com/api/v1/sites";
  // const oath =
  //   "https://app.netlify.com/authorize?client_id=bnjmMi_LH_C98kBnMB38oMeJnYsuNiztNTnW-FNhIZA&response_type=token&redirect_uri=https://sparkly-mermaid-d9b96d.netlify.app/&state=";
  const getSites = () => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${tok}`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  getSites();
  return (
    <div className="Projects">
      <p>from projects</p>
      <Carousel />
    </div>
  );
};

export default Projects;
