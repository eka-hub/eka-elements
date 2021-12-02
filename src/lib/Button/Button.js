import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Button.module.scss";
import { ReactSVG } from "react-svg";

const Button = ({
  className,
  children,
  icon = null,
  iconRight = false,
  iconSpin = false,
  type = "default",
  ...rest
}) => {
  const iconElement = icon && <ReactSVG src={require(`../icons/${icon}.svg`).default} wrapper={`span`} />;

  return (
    <button
      className={cn(
        className,
        css["button"],
        css[type],
        !children && css["square"],
        icon && css["with-icon"],
        iconRight && css["icon-right"],
        iconSpin && css["icon-spin"]
      )}
      {...rest}
    >
      {!iconRight && iconElement}
      {children}
      {iconRight && iconElement}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["default", "border", "secondary", "empty"]),
  icon: PropTypes.string,
  iconRight: PropTypes.bool,
  iconSpin: PropTypes.bool,
  children: PropTypes.string || PropTypes.any,
};

export default Button;
