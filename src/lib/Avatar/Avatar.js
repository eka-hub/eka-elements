import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import css from "./Avatar.module.scss";

const Avatar = ({ className = "", src = "", size = 60, ...rest }) => {
  return (
    src && (
      <div
        className={cn(className, css["avatar"])}
        style={{ backgroundImage: `url(${src})`, width: `${size}px`, height: `${size}px` }}
        {...rest}
      />
    )
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.number,
  rest: PropTypes.any,
};

export default Avatar;
