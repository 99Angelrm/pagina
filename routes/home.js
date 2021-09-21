// imports
const express = require("express");
const router = express.Router();
//controllers
const homeController = require("../controllers/home");

//endpoints
router.get("/", homeController.getHome);

module.exports = router;
