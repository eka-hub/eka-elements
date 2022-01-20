"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AvatarModule = _interopRequireDefault(require("./Avatar.module.scss"));

const _excluded = ["className", "src", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Avatar = _ref => {
  let {
    className = "",
    src = null,
    size = 60
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return src && /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)(className, _AvatarModule.default["avatar"]),
    style: {
      backgroundImage: "url(".concat(src, ")"),
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }, rest));
};

Avatar.propTypes = {
  className: _propTypes.default.string,
  src: _propTypes.default.string,
  size: _propTypes.default.number,
  rest: _propTypes.default.any
};
var _default = Avatar;
exports.default = _default;