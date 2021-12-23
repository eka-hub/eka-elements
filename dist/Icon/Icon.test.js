"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Icon test", () => {
  test("Has className", () => {
    const className = "some-class";
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: "alarm",
      className: className
    }));
    expect(container.querySelector(".".concat(className))).toBeInTheDocument();
  });
  test("Should not be in the document", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Icon.default, null));
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(icon).not.toBeInTheDocument();
  });
  test("Icon should exists in _icons folder", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: "not-such-icon"
    }));
    const icon = container.querySelector('[data-src="not-such-icon.svg"]');
    expect(icon).not.toBeInTheDocument();
  });
  test("Icon is added", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: "alarm"
    }));
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(icon).toBeInTheDocument();
  });
  test("Should spins", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: "alarm",
      spin: true
    }));
    const icon = container.querySelector(".spin");
    expect(container).toContainElement(icon);
  });
  test("Should show an emoji", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: "\uD83E\uDD51",
      spin: true
    }));
    const icon = container.querySelector("span");
    expect(icon.textContent).toContain("🥑");
  });
  test("Can be clickable", () => {
    const onClick = jest.fn();
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Icon.default, {
      icon: "alarm",
      "data-testid": "icon",
      onClick: onClick
    }));
    expect(onClick).not.toHaveBeenCalled();
    (0, _react2.act)(() => {
      _userEvent.default.click(getByTestId("icon"));
    });
    expect(onClick).toHaveBeenCalled();
  });
});