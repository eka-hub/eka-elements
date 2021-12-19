"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

var _ = require("..");

var _ButtonWrapper = _interopRequireDefault(require("./ButtonWrapper"));

const _excluded = ["className", "children", "icon", "iconRight", "iconSpin", "type", "to", "newTab"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Button = _ref => {
  let {
    className = "",
    children = "",
    icon = "",
    iconRight = false,
    iconSpin = false,
    type = "default",
    to = "",
    newTab = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_ButtonWrapper.default, _extends({
    className: (0, _classnames.default)(className, _ButtonModule.default["button"], _ButtonModule.default[type], !children && _ButtonModule.default["square"], icon && _ButtonModule.default["with-icon"], iconRight && _ButtonModule.default["icon-right"]),
    to: to,
    newTab: newTab
  }, rest), !iconRight && /*#__PURE__*/_react.default.createElement(_.Icon, {
    icon: icon,
    spin: iconSpin
  }), children, iconRight && /*#__PURE__*/_react.default.createElement(_.Icon, {
    icon: icon,
    spin: iconSpin
  }));
};

Button.propTypes = {
  className: _propTypes.default.string,
  icon: _propTypes.default.string,
  iconRight: _propTypes.default.bool,
  iconSpin: _propTypes.default.bool,
  type: _propTypes.default.oneOf(["default", "border", "secondary", "empty"]),
  to: _propTypes.default.string,
  newTab: _propTypes.default.bool,
  children: _propTypes.default.string,
  rest: _propTypes.default.any
};
var _default = Button;
exports.default = _default;