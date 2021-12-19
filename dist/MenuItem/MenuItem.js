"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MenuItemModule = _interopRequireDefault(require("./MenuItem.module.scss"));

var _ = require("..");

var _reactRouterDom = require("react-router-dom");

const _excluded = ["className", "to", "icon", "active", "children", "indicate"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const MenuItem = _ref => {
  let {
    className = "",
    to = "",
    icon = "",
    active = false,
    children = "",
    indicate = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, _extends({
    to: to,
    className: (0, _classnames.default)(className, _MenuItemModule.default["menu-item"], active && _MenuItemModule.default["active"])
  }, rest), icon && /*#__PURE__*/_react.default.createElement(_.Icon, {
    icon: icon
  }), children, indicate && /*#__PURE__*/_react.default.createElement(_.Dot, {
    className: _MenuItemModule.default["indicator"],
    state: "active"
  }));
};

MenuItem.propTypes = {
  className: _propTypes.default.string,
  to: _propTypes.default.string,
  icon: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool,
  children: _propTypes.default.string.isRequired,
  rest: _propTypes.default.any
};
var _default = MenuItem;
exports.default = _default;