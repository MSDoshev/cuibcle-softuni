const router = require("express").Router();

const { getCreateCube, postCreateCube, getDetails } = require("./controllers/cubeController");
const { getHomePage, getAboutPage } = require("./controllers/homeController");

router.get("/", getHomePage);

router.get("/about", getAboutPage);

router.get("/create", getCreateCube);
router.post("/create", postCreateCube);
router.get("/details/:cubeId", getDetails);

module.exports = router;
