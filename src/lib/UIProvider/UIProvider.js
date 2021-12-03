import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Dot.module.scss";

const UIProvider = ({ className = "", state = "default", ...rest }) => {
  return <div className={cn(className, css["dot"], css[state])} {...rest} />;
};

UIProvider.propTypes = {
  className: PropTypes.string,
  state: PropTypes.oneOf(["default", "active"]),
  rest: PropTypes.any,
};

export default UIProvider;
