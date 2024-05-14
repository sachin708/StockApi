const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = mongoose.connect("mongodb+srv://sachinmohite:sachin@cluster0.woijmce.mongodb.net/kcinvestment?retryWrites=true&w=majority&appName=Cluster0");

module.exports = {
  connection,
};
