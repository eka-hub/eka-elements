"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _useConnection = _interopRequireDefault(require("./useConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("useConnection test", () => {
  test("Should set connection", () => {
    const {
      result
    } = (0, _reactHooks.renderHook)(() => (0, _useConnection.default)());
    (0, _reactHooks.act)(() => {
      result.current.setConnected(false);
    });
    expect(result.current.isConnected).toBe(false);
    (0, _reactHooks.act)(() => {
      result.current.setConnected(undefined); // falsy
    });
    expect(result.current.isConnected).toBeFalsy();
    (0, _reactHooks.act)(() => {
      result.current.setConnected({}); // truthy
    });
    expect(result.current.isConnected).toBeTruthy();
  });
});