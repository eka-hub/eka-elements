"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.immediate.js");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));

const _excluded = ["id", "title", "onClick", "content"],
      _excluded2 = ["activeTab", "setActiveTab", "id", "title", "onClick", "hashActive"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Tabs = _ref => {
  var _tabs$find;

  let {
    tabs = [],
    activeId = 0,
    hashActive = false
  } = _ref;
  const rowRef = (0, _react.useRef)();
  const [activeTab, setActiveTab] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (tabs.length > 0 && hashActive) {
      const id = window.location.hash.substring(1);

      if (id) {
        setActiveTab(id);

        try {
          const index = tabs.findIndex(tab => String(tab.id) === String(id));

          if (rowRef && index > tabs.length / 2) {
            setImmediate(() => {
              rowRef.current.scrollLeft = rowRef.current.scrollWidth;
            });
          }
        } catch (_unused) {
          console.error("Tabs row 'div' is needed.");
        }
      } else if (activeId === 0) {
        var _tabs$;

        setActiveTab((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.id);
      }
    } else {
      var _tabs$2;

      setActiveTab((_tabs$2 = tabs[0]) === null || _tabs$2 === void 0 ? void 0 : _tabs$2.id);
    }
  }, [tabs, hashActive, activeId, rowRef]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _TabsModule.default.tabs
  }, tabs.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: _TabsModule.default["tabs-row"],
    ref: rowRef
  }, tabs.map((_ref2, index) => {
    let {
      id,
      title,
      onClick,
      content
    } = _ref2,
        rest = _objectWithoutProperties(_ref2, _excluded);

    return /*#__PURE__*/_react.default.createElement(Tab, _extends({
      key: id || index + title,
      activeTab: activeTab,
      setActiveTab: setActiveTab,
      id: id,
      title: title,
      onClick: onClick,
      hashActive: hashActive
    }, rest));
  })), /*#__PURE__*/_react.default.createElement(_.Block, {
    className: _TabsModule.default.content
  }, (_tabs$find = tabs.find(tab => String(tab.id) === String(activeTab))) === null || _tabs$find === void 0 ? void 0 : _tabs$find.content)) : null);
};

exports.Tabs = Tabs;
Tabs.propTypes = {
  tabs: _propTypes.default.array,
  activeId: _propTypes.default.any,
  hashActive: _propTypes.default.bool
};
/**
 * Just for semantic.
 *
 * @prop id (any): Unique ID;
 * @prop title (string): Title of the Tab;
 * @prop activeTab (any): Id of the current tab;
 * @prop setActiveTab (func): For setting current tab;
 * @prop hashActive (bool): For saving current tab;
 * @prop ...rest - other props of the <Button /> component, such as 'icon', 'onClick', etc.
 */

const Tab = _ref3 => {
  let {
    activeTab,
    setActiveTab,
    id,
    title,
    onClick: _onClick,
    hashActive
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, _excluded2);

  const thisIsActive = String(activeTab) === String(id);
  return /*#__PURE__*/_react.default.createElement(_.Button, _extends({
    className: (0, _classnames.default)(_TabsModule.default.tab, thisIsActive ? _TabsModule.default.active : ""),
    design: thisIsActive ? "default" : "secondary",
    onClick: () => {
      if (typeof _onClick === "function") {
        _onClick();
      } else if (!(rest !== null && rest !== void 0 && rest.to)) {
        setActiveTab(id);

        if (hashActive) {
          window.location.hash = id;
        }
      }
    }
  }, rest), title);
};

exports.Tab = Tab;
Tab.propTypes = {
  activeTab: _propTypes.default.any,
  setActiveTab: _propTypes.default.func,
  id: _propTypes.default.any,
  title: _propTypes.default.string,
  onClick: _propTypes.default.func,
  hashActive: _propTypes.default.bool
};