const express = require("express");
const userController  = require("../controllers/user.controller");

module.exports = (function(){
    var router = express.Router();
     
    router.post("/signup",userController.signup);
    router.post("/login",userController.login);
    router.post("/gToken",userController.generateToken);

    return router;
})();