"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _Block = _interopRequireDefault(require("./Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Block test", () => {
  test("Has content", () => {
    const content = "This is text";
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Block.default, null, content));
    expect(container.textContent).toContain(content);
  });
  test("Has className", () => {
    const className = "some-class";
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Block.default, {
      className: className
    }));
    expect(container.querySelector(".".concat(className))).toBeInTheDocument();
  });
});