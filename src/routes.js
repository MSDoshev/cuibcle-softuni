const router = require("express").Router();

const { getCreateCube, postCreateCube, getDetails, postDeleteCube ,postEditCube, getEditCube,getDeleteCube ,getAttachAccessory, postAttachAccessory} = require("./controllers/cubeController");
const { getHomePage, getAboutPage, getErrorPage } = require("./controllers/homeController");
const accessorryController = require('./controllers/accessoryController')
const authController = require('./controllers/authController')
const {isAuthenticated} = require('./middlewares/authMiddleware');
//homeController
router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/404", getErrorPage);

router.use('/', authController);

//cubeController
router.get("/cubes/create",isAuthenticated, getCreateCube);
router.post("/cubes/create", isAuthenticated, postCreateCube);
router.get("/cubes/:cubeId/details", getDetails);
router.get("/cubes/:cubeId/edit", getEditCube);
router.post("/cubes/:cubeId/edit", postEditCube);
router.get("/cubes/:cubeId/delete", getDeleteCube);
router.post("/cubes/:cubeId/delete", postDeleteCube);
router.get('/cubes/:cubeId/attach', getAttachAccessory);
router.post('/cubes/:cubeId/attach', postAttachAccessory);

router.use("/accessories", accessorryController);

module.exports = router;
