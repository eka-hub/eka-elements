"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const noconnectedAttr = "no-connection";

const useConnection = () => {
  const [isConnected, setConnected] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    setConnected(!document.body.hasAttribute(noconnectedAttr));
  }, []);
  (0, _react.useEffect)(() => {
    document.body[!isConnected ? "setAttribute" : "removeAttribute"](noconnectedAttr, "");
  }, [isConnected]);
  return {
    isConnected,
    setConnected
  };
};

var _default = useConnection;
exports.default = _default;