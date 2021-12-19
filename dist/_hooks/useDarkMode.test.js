"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _useDarkMode = _interopRequireDefault(require("./useDarkMode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("useDarkMode test", () => {
  test("Should toggle the mode", () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useDarkMode.default)());
    (0, _reactHooks.act)(() => {
      result.current.toggleMode();
    });
    expect(result.current.dark).toBe(true);
    (0, _reactHooks.act)(() => {
      result.current.toggleMode();
    });
    expect(result.current.dark).toBe(false);
  });
  test("Should set dark mode", () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useDarkMode.default)());
    (0, _reactHooks.act)(() => {
      result.current.setMode("dark");
    });
    expect(result.current.dark).toBe(true);
    (0, _reactHooks.act)(() => {
      result.current.setMode("something else");
    });
    expect(result.current.dark).toBe(false);
  });
});