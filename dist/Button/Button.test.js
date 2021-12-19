"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Button = _interopRequireDefault(require("./Button"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const content = "text";
describe("Button test", () => {
  test("Should have an icon", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Button.default, {
      icon: "alarm"
    }));
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(icon).toBeInTheDocument();
  });
  test("Icon should be at LEFT from the text", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Button.default, {
      icon: "alarm"
    }, content));
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(container.firstChild.childNodes[0]).toContainElement(icon);
    expect(container.firstChild.childNodes[1].textContent).toContain(content);
  });
  test("Icon should be at RIGHT from the text", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Button.default, {
      icon: "alarm",
      iconRight: true
    }, content));
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(container.firstChild.childNodes[0].textContent).toContain(content);
    expect(container.firstChild.childNodes[1]).toContainElement(icon);
  });
  test("Should clicks", () => {
    const onClick = jest.fn();
    const {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Button.default, {
      "data-testid": "button",
      onClick: onClick
    }, content));
    expect(onClick).not.toHaveBeenCalled();
    (0, _react2.act)(() => {
      _userEvent.default.click(getByTestId("button"));
    });
    expect(onClick).toHaveBeenCalled();
  });
  test("Should be a link", () => {
    const link = "/link";
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      to: link,
      newTab: true
    }, content)));
    const button = container.querySelector("a");
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("href")).toBe(link);
    expect(button.getAttribute("target")).toBe("_blank");
  });
});