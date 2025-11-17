var express = require('express');
var router = express.Router();

var controller=require("../controller/controller");

router.post("/msg",controller.msgFunction);

module.exports=router;