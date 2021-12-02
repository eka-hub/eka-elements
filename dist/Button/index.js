"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cssModule = _interopRequireDefault(require("./css.module.scss"));

var _reactSvg = require("react-svg");

const _excluded = ["className", "children", "icon", "iconRight", "iconSpin", "type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Button = _ref => {
  let {
    className,
    children,
    icon = null,
    iconRight = false,
    iconSpin = false,
    type = "default"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const iconElement = icon && /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
    src: require("../icons/".concat(icon, ".svg")).default,
    wrapper: "span"
  });

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: (0, _classnames.default)(className, _cssModule.default["button"], _cssModule.default[type], !children && _cssModule.default["square"], icon && _cssModule.default["with-icon"], iconRight && _cssModule.default["icon-right"], iconSpin && _cssModule.default["icon-spin"])
  }, props), !iconRight && iconElement, children, iconRight && iconElement);
};

Button.propTypes = {
  className: _propTypes.default.string,
  type: _propTypes.default.oneOf(["default", "border", "secondary", "empty"]),
  icon: _propTypes.default.string,
  iconRight: _propTypes.default.bool,
  iconSpin: _propTypes.default.bool,
  children: _propTypes.default.string || _propTypes.default.any
};
var _default = Button;
exports.default = _default;