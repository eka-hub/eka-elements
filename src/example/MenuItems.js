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
        <MenuItem to="/home" icon="home-1" active={pathname === "/home"}>
          Коммуналка
        </MenuItem>
        <br />
        <MenuItem to="/shopping" icon="cart-4"  active={pathname === "/shopping"}>
          Покупки
        </MenuItem>
        <br />
        <MenuItem to="/contacts" icon="phone" active={pathname === "/contacts"} indicate>
          Контакты
        </MenuItem>
      </div>
    </>
  );
};

export default MenuItems;
