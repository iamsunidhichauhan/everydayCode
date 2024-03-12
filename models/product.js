const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
    },
    price: {
      type: String,
    },
    quantity: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  {
    timestamps: true, // Enable timestamps
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;