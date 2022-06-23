const mongoose = require("mongoose");

const drugSchema = mongoose.Schema({
    name: String,
    price: Number,
    recipe: Boolean,
    category: String
});

const Drug = mongoose.model("Drug", drugSchema);
module.exports = Drug;