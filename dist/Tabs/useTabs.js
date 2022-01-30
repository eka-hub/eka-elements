"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.immediate.js");

var _react = require("react");

const _excluded = ["active", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const useTabs = function useTabs(children) {
  let hashActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let rowRef = arguments.length > 2 ? arguments[2] : undefined;
  const [tabs, setTabs] = (0, _react.useState)([]);
  const [active, setActive] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    if (tabs.length > 0 && hashActive) {
      const id = Number(window.location.hash.substring(1));

      if (id < tabs.length) {
        setActive(id);

        try {
          if (rowRef && id > tabs.length / 2) {
            setImmediate(() => {
              rowRef.current.scrollLeft = rowRef.current.scrollWidth;
            });
          }
        } catch (_unused) {
          console.error("Tabs row 'div' is needed.");
        }
      }
    }
  }, [tabs, hashActive, rowRef]);
  (0, _react.useEffect)(() => {
    if (Array.isArray(children)) {
      children.forEach((tab, id) => saveTab(tab, id));
    } else {
      saveTab(children);
    } // eslint-disable-next-line

  }, [children]);

  const saveTab = function saveTab(element) {
    var _element$type;

    let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // Keep instances of Tab component only
    if ((element === null || element === void 0 ? void 0 : (_element$type = element.type) === null || _element$type === void 0 ? void 0 : _element$type.name) === "Tab") {
      const _element$props = element.props,
            {
        active = false,
        children: content
      } = _element$props,
            rest = _objectWithoutProperties(_element$props, _excluded);

      setTabs(prev => [...prev, _objectSpread({
        id,
        content
      }, rest)]);

      if (active && !hashActive) {
        setActive(id);
      }
    }
  };

  return {
    tabs,
    active,
    setActive
  };
};

var _default = useTabs;
exports.default = _default;