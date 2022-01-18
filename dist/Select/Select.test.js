"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Select = _interopRequireDefault(require("./Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const content = "text";
describe("Select test", () => {
  test("Should have an title", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Select.default, {
      title: content
    }));
    const title = container.querySelector(".title");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(content);
  });
  test("Should be disabled and warning", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Select.default, {
      disabled: true,
      warning: true
    }));
    const disabled = container.querySelector("select[disabled]");
    const warning = container.querySelector("label.warning");
    expect(disabled).toBeInTheDocument();
    expect(warning).toBeInTheDocument();
  });
  test("Should change", () => {
    const onChange = jest.fn();
    const {
      getByTestId,
      getByRole
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Select.default, {
      "data-testid": "select",
      onChange: onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "1"), /*#__PURE__*/_react.default.createElement("option", {
      value: "2"
    }, "2")));
    expect(onChange).not.toHaveBeenCalled();
    (0, _react2.act)(() => {
      _userEvent.default.selectOptions(getByTestId("select"), ["2"]);
    });
    expect(getByRole("option", {
      name: "1"
    }).selected).toBe(false);
    expect(getByRole("option", {
      name: "2"
    }).selected).toBe(true);
    expect(onChange).toHaveBeenCalled();
  });
  test("Should select multiple", () => {
    const onChange = jest.fn();
    const {
      getByTestId,
      getByRole
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Select.default, {
      "data-testid": "select",
      multiple: true,
      onChange: onChange
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: "1"
    }, "1"), /*#__PURE__*/_react.default.createElement("option", {
      value: "2"
    }, "2"), /*#__PURE__*/_react.default.createElement("option", {
      value: "3"
    }, "3"), /*#__PURE__*/_react.default.createElement("option", {
      value: "4"
    }, "4")));
    expect(onChange).not.toHaveBeenCalled();
    (0, _react2.act)(() => {
      _userEvent.default.selectOptions(getByTestId("select"), ["2", "4"]);
    });
    expect(getByRole("option", {
      name: "1"
    }).selected).toBe(false);
    expect(getByRole("option", {
      name: "2"
    }).selected).toBe(true);
    expect(getByRole("option", {
      name: "3"
    }).selected).toBe(false);
    expect(getByRole("option", {
      name: "4"
    }).selected).toBe(true);
    expect(onChange).toHaveBeenCalled();
  });
  test("Should have a hint", () => {
    const {
      container
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Select.default, {
      "data-testid": "input",
      hint: content
    }));
    expect(container.querySelector(".hint").textContent).toContain(content);
  });
});