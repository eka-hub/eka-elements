"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Toggle = _interopRequireDefault(require("./Toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Toggle test", () => {
  test("Should have a className", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Toggle.default, {
      className: "classname"
    }));
    const toggle = container.querySelector(".classname");
    expect(toggle).toBeInTheDocument();
  });
  test("Should be active", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Toggle.default, {
      active: true
    }));
    const toggle = container.querySelector("input:checked");
    expect(toggle).toBeInTheDocument();
  });
  test("Should be disabled", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Toggle.default, {
      disabled: true
    }));
    const toggle = container.querySelector("input[disabled]");
    expect(toggle).toBeInTheDocument();
  });
  test("Should change state and return onChange callback", () => {
    const isOnChange = jest.fn();
    const {
      container,
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Toggle.default, {
      "data-testid": "toggle",
      onChange: isOnChange
    }));
    const toggle = container.querySelector("input");
    expect(toggle.checked).toBe(false);
    (0, _react2.act)(() => {
      _userEvent.default.click(getByTestId("toggle"));
    });
    expect(toggle.checked).toBe(true);
    expect(isOnChange).toBeCalled();
  });
});