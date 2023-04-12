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

function App() {
  const menuItems = ["roja", "about", "work", "cats", "contact"];
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleMenu = (id) => {
    setSelectedMenu(id);
  };
  return (
    <div className="App">
      <div className="header">
        <Menu menuItems={menuItems} handleMenu={handleMenu} />
      </div>
      <div className="content">
        {selectedMenu === 0 && <Hero />}
        {selectedMenu === 1 && <About />}
        {selectedMenu === 2 && <Projects />}
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
