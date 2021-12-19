"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Avatar test", () => {
  test("Has className", () => {
    const className = "some-class";
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      src: "http",
      className: className
    }));
    expect(container.querySelector(".".concat(className))).toBeInTheDocument();
  });
  test("Should not be printed if there is no src", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Avatar.default, null));
    expect(container.querySelector(".avatar")).not.toBeInTheDocument();
  });
  test("Should have the size", () => {
    const size = 123;
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      src: "http",
      size: size
    }));
    expect(container.querySelector(".avatar")).toHaveStyle("width: ".concat(size, "px"));
    expect(container.querySelector(".avatar")).toHaveStyle("height: ".concat(size, "px"));
  });
});