import "./Menu.css";
const Menu = ({ menuItems }) => {
  return (
    <div className="Menu d-flex justify-content-evenly">
      {menuItems.map((item, i) => (
        <a href="/" key={i}>
          {item.slice(0, 1).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </div>
  );
};

export default Menu;
