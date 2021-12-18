import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Radio.module.scss";

const Radio = ({ className = "", active = false, disabled = false, ...rest }) => {
  return (
    <label className={cn(className, css["radio"], css[active ? "active" : ""], css[disabled ? "disabled" : ""])}>
      <input type="radio" defaultChecked={active} disabled={disabled} {...rest} />
      <span />
    </label>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  rest: PropTypes.any,
};

export default Radio;
