import "./Menu.css";

const Menu = ({ menuItems, handleMenu, selectedMenu }) => {
  return (
    <div className="Menu">
      {menuItems.map((item, i) => (
        <button
          style={selectedMenu === i ? { opacity: "0.5" } : { opacity: "1" }}
          key={i}
          id={item}
          onClick={() => handleMenu(i)}
        >
          {console.log(item)}
          {item.slice(0, 1).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Menu;
