const billsModel = require("../models/billsModel");

// add bills
const addBillsController = async (req, res) => {
  try {
    const newBills = new billsModel(req.body);
    await newBills.save();
    res.send("Bills Created Successfully!");
  } catch (error) {
    res.send("Something went wrong!");
    console.log(error);
  }
};

// get bills
const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addBillsController,
  getBillsController,
};
