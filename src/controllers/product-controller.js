const db = require("../models");

async function getAllProducts(req, res, next) {
  try {
    const dbRes = await db.Product.find({}, { _id: 0, __v: 0 });

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    console.log(err.message);
    // next(err)
  }
}

async function getSingleProduct(req, res, next) {
  try {
    const { productId } = req.params;
    console.log(productId);

    const dbRes = await db.Product.findOne(
      {
        _id: productId,
      },
      { __v: 0 },
    );

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    console.log(err);
    // next(err)
  }
}

async function createProduct(req, res, next) {
  try {
    const newProduct = req.body;
    const dbRes = await db.Product.create(newProduct);

    res.status(204).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    console.log(err);
    // next(err)
  }
}

async function updateProduct(req, res, next) {
  try {
    const newData = req.body;
    const { productId } = req.params;
    const dbRes = await db.Product.findOneAndUpdate(productId, newData, {
      new: true,
      runValidators: true,
    });

    res.status(201).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    console.log(err);
    // next(err)
  }
}

async function deleteProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const dbRes = await db.Product.findByIdAndDelete({
      _id: productId,
    });

    res.status(200).send({
      success: true,
      message: "Product removed",
      data: dbRes,
    });
  } catch (err) {
    console.log(err);
    // next(err)
  }
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};