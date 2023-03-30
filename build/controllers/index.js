"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _teamsController = require("./teamsController");
Object.keys(_teamsController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _teamsController[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _teamsController[key];
    }
  });
});
var _positionsController = require("./positionsController");
Object.keys(_positionsController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _positionsController[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _positionsController[key];
    }
  });
});