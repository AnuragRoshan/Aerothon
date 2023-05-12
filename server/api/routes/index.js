const router = require("express").Router();


const userController = require("../controller/userAPI");


// user api
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/filter", userController.filterParts);
router.get("/manufList", userController.manufacturerList);




module.exports = router;