"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSvg = require("react-svg");

var _classnames = _interopRequireDefault(require("classnames"));

var _IconModule = _interopRequireDefault(require("./Icon.module.scss"));

const _excluded = ["className", "spin", "icon"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Icon = _ref => {
  let {
    className = "",
    spin = false,
    icon = ""
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  let svg;

  try {
    svg = require("../_icons/".concat(icon, ".svg")).default;
  } catch (_unused) {
    svg = null;
  }

  return icon && svg && /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, _extends({
    src: svg,
    wrapper: "span",
    className: (0, _classnames.default)([className, spin && _IconModule.default.spin])
  }, rest));
};

Icon.propTypes = {
  className: _propTypes.default.string,
  spin: _propTypes.default.bool,
  icon: _propTypes.default.string,
  rest: _propTypes.default.any
};
var _default = Icon;
exports.default = _default;