"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsRow = exports.Tabs = exports.TabContent = exports.Tab = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("..");

var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));

const _excluded = ["className"],
      _excluded2 = ["className"],
      _excluded3 = ["className"],
      _excluded4 = ["className", "active"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Tabs = _ref => {
  let {
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_TabsModule.default["tabs-wrapper"], className)
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: _TabsModule.default.tabs
  }, rest)));
};

exports.Tabs = Tabs;
Tabs.propTypes = {
  className: _propTypes.default.string,
  rest: _propTypes.default.any
};

const TabsRow = _ref2 => {
  let {
    className
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)(_TabsModule.default["tabs-row"], className)
  }, rest));
};

exports.TabsRow = TabsRow;
TabsRow.propTypes = {
  className: _propTypes.default.string,
  rest: _propTypes.default.any
};

const TabContent = _ref3 => {
  let {
    className
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/_react.default.createElement(_.Block, _extends({
    className: (0, _classnames.default)(_TabsModule.default.content, className)
  }, rest));
};

exports.TabContent = TabContent;
TabContent.propTypes = {
  className: _propTypes.default.string,
  rest: _propTypes.default.any
};

const Tab = _ref4 => {
  let {
    className,
    active = false
  } = _ref4,
      rest = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/_react.default.createElement(_.Button, _extends({
    className: (0, _classnames.default)(_TabsModule.default.tab, className, active ? _TabsModule.default.active : ""),
    design: active ? "default" : "secondary"
  }, rest));
};

exports.Tab = Tab;
Tab.propTypes = {
  className: _propTypes.default.string,
  active: _propTypes.default.bool,
  rest: _propTypes.default.any
};