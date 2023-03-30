"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPositions = void 0;
var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));
var _data = require("../data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getPositions = (0, _expressAsyncHandler.default)(async (_, res) => {
  try {
    res.json(_data.positions);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
    throw new Error('Error');
  }
});
exports.getPositions = getPositions;