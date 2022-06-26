const router = require("express").Router();
const billsController = require("../controllers/billsController");

// bills method-post
router.post("/add-bills", billsController.addBillsController);

// bills method-get
router.get("/get-bills", billsController.getBillsController);

module.exports = router;
