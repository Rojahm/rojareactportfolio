import "./Menu.css";
const Menu = ({ menuItems, handleMenu, selectedMenu }) => {
  return (
    <div className="Menu">
      <div className="bar">
        {menuItems.map((item, i) => (
          <button
            href="/"
            style={selectedMenu === i ? { opacity: "0.6" } : { opacity: "1" }}
            key={i}
            onClick={() => handleMenu(i)}
          >
            {item.slice(0, 1).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
