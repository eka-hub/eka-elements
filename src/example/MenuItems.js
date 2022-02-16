import { useLocation } from "react-router";
import { MenuItem } from "../lib";

const MenuItems = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div style={{ width: "208px" }}>
        <MenuItem to="/calendar" icon="calendar" active={pathname === "/calendar"}>
          Календарь
        </MenuItem>
        <br />
        <MenuItem to="/home" icon="✈️" active={pathname === "/home"}>
          Коммуналка
        </MenuItem>
        <br />
        <MenuItem to="/hobby" icon="🚵‍♀️" active={pathname === "/hobby"}>
          Хобби
        </MenuItem>
        <br />
        <MenuItem to="/shopping" icon="shopping-cart"  active={pathname === "/shopping"}>
          Покупки
        </MenuItem>
        <br />
        <MenuItem to="/contacts" icon="call" active={pathname === "/contacts"} indicate>
          Контакты
        </MenuItem>
        <br />
        <MenuItem onClick={() => alert("Hello?")} icon="edit-2">
          Just for click
        </MenuItem>
      </div>
    </>
  );
};

export default MenuItems;
