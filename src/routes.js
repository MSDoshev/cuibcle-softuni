const router = require("express").Router();

const { getCreateCube, postCreateCube, getDetails } = require("./controllers/cubeController");
const { getHomePage, getAboutPage, getErrorPage } = require("./controllers/homeController");

router.get("/", getHomePage);

router.get("/about", getAboutPage);
router.get("/404", getErrorPage);

router.get("/create", getCreateCube);
router.post("/create", postCreateCube);
router.get("/details/:cubeId", getDetails);

module.exports = router;
