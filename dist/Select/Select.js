"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SelectModule = _interopRequireDefault(require("./Select.module.scss"));

const _excluded = ["className", "title", "disabled", "warning", "multiple", "hint", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Select = _ref => {
  let {
    className = "",
    title = "",
    disabled = false,
    warning = false,
    multiple = false,
    hint = "",
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _SelectModule.default["select-wrapper"]
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: _SelectModule.default["title"]
  }, title), /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)(className, _SelectModule.default["select"], disabled && _SelectModule.default["disabled"], multiple && _SelectModule.default["multiple"], warning && _SelectModule.default["warning"])
  }, /*#__PURE__*/_react.default.createElement("select", _extends({
    disabled: disabled,
    multiple: multiple
  }, rest), children)), hint && /*#__PURE__*/_react.default.createElement("span", {
    className: _SelectModule.default.hint
  }, hint));
};

Select.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  hint: _propTypes.default.string,
  rest: _propTypes.default.any
};
var _default = Select;
exports.default = _default;