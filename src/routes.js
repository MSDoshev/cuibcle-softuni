const router = require("express").Router();

const { getCreateCube } = require("./controllers/cubeController");
const { getHomePage, getAboutPage } = require("./controllers/homeController");

router.get("/", getHomePage);

router.get("/about", getAboutPage);

router.get("/create", getCreateCube);

module.exports = router;
