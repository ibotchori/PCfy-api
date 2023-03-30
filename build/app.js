"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _routes = require("./routes");
var _errorMiddleware = require("./middlewares/errorMiddleware");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const app = (0, _express.default)();

// Middleware
exports.app = app;
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use((0, _cors.default)({}));

/* Routes */
app.use('/teams', _routes.teamsRoutes);
app.use('/positions', _routes.positionsRoutes);

// Home page
app.get('/', (_, res) => {
  res.send('Welcome to Node.js Server"');
});

// overwrite the default express error handler with custom error handler middleware
app.use(_errorMiddleware.errorHandler); // <-- error handler middleware

app.listen(process.env.SERVER_PORT, () => console.log(`Server is listening at http://localhost:${process.env.SERVER_PORT}`));