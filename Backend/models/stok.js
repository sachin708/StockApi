const mongoose = require("mongoose");

const StockSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const StokeModel = mongoose.model("stoke", StockSchema);

module.exports = {
  StokeModel,
};
