import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Block.module.scss";

const Block = ({ className = "", ...rest }) => {
  return <div className={cn(className, css["block"])} {...rest} />;
};

Block.propTypes = {
  className: PropTypes.string,
  rest: PropTypes.any,
};

export default Block;
