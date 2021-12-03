import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Button.module.scss";
import { Icon } from "..";

const Button = ({
  className = "",
  children = "",
  icon = null,
  iconRight = false,
  iconSpin = false,
  type = "default",
  ...rest
}) => {
  return (
    <button
      className={cn(
        className,
        css["button"],
        css[type],
        !children && css["square"],
        icon && css["with-icon"],
        iconRight && css["icon-right"]
      )}
      {...rest}
    >
      {!iconRight && <Icon icon={icon} spin={iconSpin} />}
      {children}
      {iconRight && <Icon icon={icon} spin={iconSpin} />}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["default", "border", "secondary", "empty"]),
  icon: PropTypes.string,
  iconRight: PropTypes.bool,
  iconSpin: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
