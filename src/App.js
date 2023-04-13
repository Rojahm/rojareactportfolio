import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Cats from "./components/Cats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const menuItems = ["roja", "about", "work", "cats", "contact"];
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleMenu = (id) => {
    setSelectedMenu(id);
  };

  //project api
  const [sites, setSites] = useState(null);
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
        setSites(response.data);
        console.log(response);
      });
    // .catch((error) => setError(error));
  };

  if (!ready && sites === null) {
    getSites();
  }

  return (
    <div className="App">
      <div className="header">
        <Menu
          menuItems={menuItems}
          handleMenu={handleMenu}
          selectedMenu={selectedMenu}
        />
      </div>
      <div className="content">
        {selectedMenu === 0 && <Hero />}
        {selectedMenu === 1 && <About />}
        {selectedMenu === 2 && <Projects sites={sites} ready={ready} />}
        {selectedMenu === 3 && <Cats />}
        {selectedMenu === 4 && <Contact />}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
