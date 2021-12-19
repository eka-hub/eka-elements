"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Radio = _interopRequireDefault(require("./Radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Radio test", () => {
  test("Should have a className", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Radio.default, {
      className: "classname"
    }));
    const radio = container.querySelector(".classname");
    expect(radio).toBeInTheDocument();
  });
  test("Should be active", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Radio.default, {
      active: true
    }));
    const radio = container.querySelector("input:checked");
    expect(radio).toBeInTheDocument();
  });
  test("Should be disabled", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Radio.default, {
      disabled: true
    }));
    const radio = container.querySelector("input[disabled]");
    expect(radio).toBeInTheDocument();
  });
  test("Should change state and return onChange callback", () => {
    const isOnChange = jest.fn();
    const {
      container,
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Radio.default, {
      "data-testid": "radio",
      onChange: isOnChange
    }));
    const toggle = container.querySelector("input");
    expect(toggle.checked).toBe(false);
    (0, _react2.act)(() => {
      _userEvent.default.click(getByTestId("radio"));
    });
    expect(toggle.checked).toBe(true);
    expect(isOnChange).toBeCalled();
  });
});