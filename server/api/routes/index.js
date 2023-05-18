const router = require("express").Router();


const userController = require("../controller/userAPI");


// user api
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/filter/:age/:cfp/:lcs/:landfill/:water", userController.filterParts);
router.get("/filter2/:age/:cfp/:lcs/:landfill/:water", userController.filterParts2);
router.get("/filter3/:age/:cfp/:lcs/:landfill/:water", userController.filterParts3);
router.get("/manufList/:vari", userController.manufacturerList);
router.post("/sendRecycle", userController.sendRecycle);
router.post("/sendRecycle2", userController.sendRecycle2);
router.post("/sendRecycle3", userController.sendRecycle3);
router.get("/logedinuser", userController.userDetails);
router.post("/logout", userController.logout);



module.exports = router;