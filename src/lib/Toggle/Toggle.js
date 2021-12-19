import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Toggle.module.scss";

const Toggle = ({ className = "", active = false, disabled = false, onChange = null, ...rest }) => {
  const [isActive, setIsActive] = useState(active);

  return (
    <label className={cn(className, css["toggle"], css[isActive ? "active" : ""], css[disabled ? "disabled" : ""])}>
      <input
        type="checkbox"
        defaultChecked={isActive}
        onChange={(e) => {
          onChange?.(e);
          setIsActive(e.target.checked);
        }}
        disabled={disabled}
        {...rest}
      />
      <span />
    </label>
  );
};

Toggle.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  rest: PropTypes.any,
};

export default Toggle;
