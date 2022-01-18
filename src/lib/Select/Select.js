import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Select.module.scss";

const Select = ({
  className = "",
  title = "",
  disabled = false,
  warning = false,
  multiple = false,
  hint = "",
  children,
  ...rest
}) => {
  return (
    <div className={css["select-wrapper"]}>
      {title && <div className={css["title"]}>{title}</div>}
      <label
        className={cn(
          className,
          css["select"],
          disabled && css["disabled"],
          multiple && css["multiple"],
          warning && css["warning"]
        )}
      >
        <select disabled={disabled} multiple={multiple} {...rest}>
          {children}
        </select>
      </label>
      {hint && <span className={css.hint}>{hint}</span>}
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  warning: PropTypes.bool,
  hint: PropTypes.string,
  rest: PropTypes.any,
};

export default Select;
