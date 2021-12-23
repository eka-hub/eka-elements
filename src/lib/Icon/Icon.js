import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import cn from "classnames";
import css from "./Icon.module.scss";

const isEmoji = (str) => /\p{Extended_Pictographic}/gu.test(str);

const Icon = ({ className = "", spin = false, icon = "", ...rest }) => {
  if (isEmoji(icon)) {
    return (
      <span className={cn([className, css.emoji, spin && css.spin])} {...rest}>
        {icon}
      </span>
    );
  } else {
    let svg;
    try {
      svg = require(`../_icons/${icon}.svg`).default;
    } catch {
      svg = null;
    }
    return (
      icon && svg && <ReactSVG src={svg} wrapper={`span`} className={cn([className, spin && css.spin])} {...rest} />
    );
  }
};

Icon.propTypes = {
  className: PropTypes.string,
  spin: PropTypes.bool,
  icon: PropTypes.string,
  rest: PropTypes.any,
};

export default Icon;
