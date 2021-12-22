const axios = require("axios");
const db = require("../models");

async function seedData() {
  try {
    const req = await axios.get("https://fakestoreapi.com/products");
    req.data.forEach((element) => {
      delete element["id"];
      element.unitsInStock = 10;
      element.image = [element.image, element.image];
    });
    await db.Product.deleteMany({});
    await db.Product.insertMany([...req.data]);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = seedData;
