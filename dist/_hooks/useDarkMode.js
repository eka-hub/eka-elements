"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const darkAttr = "dark-mode";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setIsDarkMode(document.body.hasAttribute(darkAttr));
  }, []);
  (0, _react.useEffect)(() => {
    document.body[isDarkMode ? "setAttribute" : "removeAttribute"](darkAttr, "");
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const setMode = mode => {
    setIsDarkMode(mode === "dark");
  };

  return {
    dark: isDarkMode,
    toggleMode,
    setMode
  };
};

var _default = useDarkMode;
exports.default = _default;