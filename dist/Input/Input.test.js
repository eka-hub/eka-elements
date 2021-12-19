"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const content = "text";
describe("Input test", () => {
  test("Should have an icon", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Input.default, {
      icon: "alarm"
    }));
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(icon).toBeInTheDocument();
  });
  test("Should have an title", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Input.default, {
      title: content
    }));
    const title = container.querySelector(".title");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(content);
  });
  test("Should be disabled and warning", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Input.default, {
      disabled: true,
      warning: true
    }));
    const disabled = container.querySelector("input[disabled]");
    const warning = container.querySelector("label.warning");
    expect(disabled).toBeInTheDocument();
    expect(warning).toBeInTheDocument();
  });
  test("Should change", () => {
    const onChange = jest.fn();
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Input.default, {
      "data-testid": "input",
      onChange: onChange
    }));
    expect(onChange).not.toHaveBeenCalled();
    (0, _react2.act)(() => {
      _userEvent.default.type(getByTestId("input"), content);
    });
    expect(onChange).toHaveBeenCalled();
  });
});