const router = require("express").Router();

const { getCreateCube, postCreateCube, getDetails, getAttachAccessory, postAttachAccessory} = require("./controllers/cubeController");
const { getHomePage, getAboutPage, getErrorPage } = require("./controllers/homeController");
const accessorryController = require('./controllers/accessoryController')
const authController = require('./controllers/authController')
//homeController
router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/404", getErrorPage);

router.use('/', authController);

//cubeController
router.get("/cubes/create", getCreateCube);
router.post("/cubes/create", postCreateCube);
router.get("/cubes/:cubeId/details", getDetails);
router.get('/cubes/:cubeId/attach', getAttachAccessory);
router.post('/cubes/:cubeId/attach', postAttachAccessory);

router.use("/accessories", accessorryController);

module.exports = router;
