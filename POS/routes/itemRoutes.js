const express = require("express");
const itemController = require("../controllers/itemController");

const router = express.Router();

//routes
//Method - get
router.get("/get-item", itemController.getItemController);

//Method - POST
router.post("/add-item", itemController.addItemController);

//method - PUT
router.put("/edit-item", itemController.editItemController);

//method - DELETE
router.post("/delete-item", itemController.deleteItemController);

module.exports = router;
