import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./MenuItem.module.scss";
import { Icon } from "..";
import { Link } from "react-router-dom";

const MenuItem = ({ className = "", to = "", icon = "", active = false, children = "", ...rest }) => {
  return (
    <Link to={to} className={cn(className, css["menu-item"], active && css["active"])} {...rest}>
      {icon && <Icon icon={icon} />}
      {children}
    </Link>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
  rest: PropTypes.any,
};

export default MenuItem;
