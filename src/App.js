import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";

function App() {
  const menuItems = ["roja", "about", "work", "cats", "contact"];
  return (
    <div className="App">
      <Menu menuItems={menuItems} />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
