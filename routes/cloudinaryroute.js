const router=require("express").Router();
const cloudinary= require("../controller/cloudinary");

router.post("/upload",cloudinary.cloudinaryset);
module.exports = router