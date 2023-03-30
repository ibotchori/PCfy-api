"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const {
  Schema
} = _mongoose.default;
const itemsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  groupId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true
  }
});
var _default = _mongoose.default.model("Items", itemsSchema);
exports.default = _default;