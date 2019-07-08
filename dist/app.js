"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// initailizing a app instance
var app = express_1.default();
// setting a port number
var PORT = process.env.PORT || '5000';
app.get('/', function (req, res, next) { res.send('Hello'); });
app.listen(parseInt(PORT), function () { return console.log("Server running on PORT: " + PORT); });
