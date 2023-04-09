import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const menuItems = ["roja", "about", "work", "cats", "contact"];
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleMenu = (id) => {
    setSelectedMenu(id);
  };
  return (
    <div className="App">
      <Menu menuItems={menuItems} handleMenu={handleMenu} />
      <header className="App-header">
        {selectedMenu === 0 && <Hero />}
        {selectedMenu === 2 && <Projects />}
      </header>
    </div>
  );
}

export default App;
