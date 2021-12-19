"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _Dot = _interopRequireDefault(require("./Dot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Dot test", () => {
  test("Has className", () => {
    const className = "some-class";
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Dot.default, {
      className: className
    }));
    expect(container.querySelector(".".concat(className))).toBeInTheDocument();
  });
  test("Should have an active state", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Dot.default, {
      state: "active"
    }));
    expect(container.querySelector(".active")).toBeInTheDocument();
  });
});