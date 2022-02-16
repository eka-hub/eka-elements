import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Button.module.scss";
import { Icon } from "..";
import ButtonWrapper from "./ButtonWrapper";

const Button = ({
  className = "",
  children = "",
  icon = "",
  iconRight = false,
  iconSpin = false,
  design = "default",
  to = "",
  newTab = false,
  ...rest
}) => {
  return (
    <ButtonWrapper
      className={cn(
        className,
        css["button"],
        css[design],
        !children && css["square"],
        icon && css["with-icon"],
        iconRight && css["icon-right"]
      )}
      to={to}
      newTab={newTab}
      {...rest}
    >
      {!iconRight && <Icon icon={icon} spin={iconSpin} />}
      {children}
      {iconRight && <Icon icon={icon} spin={iconSpin} />}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconRight: PropTypes.bool,
  iconSpin: PropTypes.bool,
  design: PropTypes.oneOf(["default", "border", "secondary", "empty", "danger"]),
  to: PropTypes.string,
  newTab: PropTypes.bool,
  children: PropTypes.string,
  rest: PropTypes.any,
};

export default Button;
