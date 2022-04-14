const express = require("express")
const route = express.Router();
const controller = require("../controller")
route.get("/mul",controller.myFunction);
route.get("/sub",controller.myFunctionDiv);

module.exports = route;