import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Dot.module.scss";

const Dot = ({ className = "", state = "default", ...rest }) => {
  return <div className={cn(className, css["dot"], css[state])} {...rest} />;
};

Dot.propTypes = {
  className: PropTypes.string,
  state: PropTypes.oneOf(["default", "active"]),
  rest: PropTypes.any,
};

export default Dot;
