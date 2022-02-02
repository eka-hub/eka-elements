"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));

var _useTabs = _interopRequireDefault(require("./useTabs"));

const _excluded = ["id", "title", "onClick", "content"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Tabs = _ref => {
  var _tabs$find;

  let {
    children,
    hashActive = false
  } = _ref;
  const rowRef = (0, _react.useRef)();
  const {
    tabs,
    active,
    setActive
  } = (0, _useTabs.default)(children, hashActive, rowRef);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _TabsModule.default.tabs
  }, tabs.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _TabsModule.default["tabs-row"],
    ref: rowRef
  }, tabs.map(_ref2 => {
    let {
      id,
      title,
      onClick: _onClick,

      /* ignore */
      content
    } = _ref2,
        rest = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/_react.default.createElement(_.Button, _extends({
      key: id,
      className: (0, _classnames.default)(_TabsModule.default.tab, active === id ? _TabsModule.default.active : ""),
      design: active === id ? "default" : "secondary",
      onClick: () => {
        if (typeof _onClick === "function") {
          _onClick();
        } else if (!(rest !== null && rest !== void 0 && rest.to)) {
          setActive(id);

          if (hashActive) {
            window.location.hash = id;
          }
        }
      }
    }, rest), title);
  })), /*#__PURE__*/_react.default.createElement(_.Block, {
    className: _TabsModule.default.content
  }, (_tabs$find = tabs.find(tab => tab.id === active)) === null || _tabs$find === void 0 ? void 0 : _tabs$find.content)) : null);
};

exports.Tabs = Tabs;
Tabs.propTypes = {
  children: _propTypes.default.any,
  hashActive: _propTypes.default.bool
};
/**
 * Just for semantic.
 *
 * @prop title (string): Title of the Tab;
 * @prop active (bool): Is this tab current;
 * @prop children (any): Content of the tab;
 * @prop ...rest - other props of the <Button /> component, such as 'icon', 'onClick', etc.
 */

const Tab = () => /*#__PURE__*/_react.default.createElement("div", null);

exports.Tab = Tab;