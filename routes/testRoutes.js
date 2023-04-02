const express = require("express");
const { putData, postData, getData, deleteData } = require("../controller/testController");
const routers = express.Router();

routers.get("/", getData);
routers.post("/", postData);
routers.put("/:id", putData);
routers.delete("/:id", deleteData);
module.exports = routers;