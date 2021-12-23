const axios = require("axios");
const db = require("../models");
const { getSeedPurchases } = require("./seed-data");

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

async function seedPurchases() {
  try {
    const purchases = getSeedPurchases();
    await db.Purchase.deleteMany({});

    await db.Purchase.create([...purchases]);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { seedData, seedPurchases };
