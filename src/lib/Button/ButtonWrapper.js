import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonWrapper = ({ to = "", newTab = false, ...rest }) =>
  !!to ? <Link to={to} target={newTab ? "_blank" : ""} {...rest} /> : <button {...rest} />;

ButtonWrapper.propTypes = {
  to: PropTypes.string,
  newTab: PropTypes.bool,
  rest: PropTypes.any,
};

export default ButtonWrapper;
