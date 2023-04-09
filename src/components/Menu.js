const Menu = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((item, i) => (
        <a href="/" key={i}>
          {item.toUpperCase()}
        </a>
      ))}
    </div>
  );
};

export default Menu;
