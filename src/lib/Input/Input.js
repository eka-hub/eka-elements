import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Input.module.scss";
import { Icon } from "..";

const Input = ({ className = "", title = "", icon = "", disabled = false, warning = false, ...rest }) => {
  return (
    <label className={css["input-wrapper"]}>
      {title && <div className={css["title"]}>{title}</div>}
      <label
        className={cn(
          className,
          css["input"],
          icon && css["with-icon"],
          disabled && css["disabled"],
          warning && css["warning"]
        )}
      >
        <Icon icon={icon} />
        <input disabled={disabled} {...rest} />
      </label>
    </label>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  rest: PropTypes.any,
};

export default Input;
