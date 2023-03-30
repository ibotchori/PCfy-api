"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "errorHandler", {
  enumerable: true,
  get: function () {
    return _errorMiddleware.default;
  }
});
var _errorMiddleware = _interopRequireDefault(require("./errorMiddleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }