"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const content = "text";
describe("MenuItem test", () => {
  test("Should have an icon", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      icon: "calendar"
    }, content)));
    const icon = container.querySelector('[data-src="calendar.svg"]');
    expect(icon).toBeInTheDocument();
  });
  test("Should have an indicator", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      icon: "calendar",
      indicate: true
    }, content)));
    const indicator = container.querySelector(".indicator");
    expect(indicator).toBeInTheDocument();
  });
  test("Should be a link", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      icon: "calendar",
      to: "/calendar"
    }, content)));
    const item = container.querySelector("a.menu-item");
    expect(item).toBeInTheDocument();
    expect(item.getAttribute("href")).toBe("/calendar");
  });
  test("Should throw an error due to isRequired props", () => {
    const console_error = jest.spyOn(console, "error").mockImplementation(() => {});
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      to: "/calendar",
      active: true
    })));
    expect(console_error).toBeCalled();
  });
  test("Should be an active", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      to: "/calendar",
      icon: "calendar",
      active: true
    }, content)));
    const item = container.querySelector("a.menu-item");
    expect(item).toHaveClass("menu-item active");
  });
  test.todo("Should change location");
});