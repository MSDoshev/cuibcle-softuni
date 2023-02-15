const router = require("express").Router();

const { getCreateCube, postCreateCube, getDetails, postDeleteCube ,postEditCube, getEditCube,getDeleteCube ,getAttachAccessory, postAttachAccessory} = require("./controllers/cubeController");
const { getHomePage, getAboutPage, getErrorPage } = require("./controllers/homeController");
const accessorryController = require('./controllers/accessoryController')
const authController = require('./controllers/authController')
const {isAuthenticated} = require('./middlewares/authMiddleware');
const {handleRequest} = require('./utils/requestUtils')
//homeController
router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/404", getErrorPage);

router.use('/', authController);

//cubeController
router.get("/cubes/create",isAuthenticated, handleRequest(getCreateCube));
router.post("/cubes/create", isAuthenticated, handleRequest(postCreateCube));
router.get("/cubes/:cubeId/details", handleRequest(getDetails));
router.get("/cubes/:cubeId/edit", isAuthenticated, handleRequest(getEditCube));
router.post("/cubes/:cubeId/edit", handleRequest(postEditCube));
router.get("/cubes/:cubeId/delete", handleRequest(getDeleteCube));
router.post("/cubes/:cubeId/delete", handleRequest(postDeleteCube));
router.get('/cubes/:cubeId/attach', handleRequest(getAttachAccessory));
router.post('/cubes/:cubeId/attach', handleRequest(postAttachAccessory));

router.use("/accessories", accessorryController);

module.exports = router;
