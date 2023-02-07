const router = require("express").Router();

const { getCreateCube, postCreateCube, getDetails, getAttachAccessory} = require("./controllers/cubeController");
const { getHomePage, getAboutPage, getErrorPage } = require("./controllers/homeController");
const accessorryController = require('./controllers/accessoryController')

router.get("/", getHomePage);

router.get("/about", getAboutPage);
router.get("/404", getErrorPage);

router.get("/create", getCreateCube);
router.post("/create", postCreateCube);
router.get("/details/:cubeId", getDetails);
router.get('/cubes/:cubeId/attach', getAttachAccessory);

router.use("/accessory", accessorryController);

module.exports = router;
