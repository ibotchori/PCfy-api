"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = void 0;
var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));
var _items = _interopRequireDefault(require("../items"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getAllItems = (0, _expressAsyncHandler.default)(async (_, res) => {
  try {
    res.json(_items.default);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
    throw new Error("Error");
  }
});
exports.getAllItems = getAllItems;