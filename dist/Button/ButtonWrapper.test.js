"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _reactRouterDom = require("react-router-dom");

var _ButtonWrapper = _interopRequireDefault(require("./ButtonWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const content = "text";
describe("Button Wrapper test", () => {
  test("Should be a link", () => {
    const link = "/link";
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_ButtonWrapper.default, {
      to: link
    }, content)));
    const button = container.querySelector("a");
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("href")).toBe(link);
    expect(button.textContent).toBe(content);
  });
  test("Should have a target=_blank", () => {
    const link = "/link";
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_ButtonWrapper.default, {
      to: link,
      newTab: true
    }, content)));
    const button = container.querySelector("a");
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("target")).toBe("_blank");
  });
  test("Should be a button", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ButtonWrapper.default, null, content));
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(content);
  });
});