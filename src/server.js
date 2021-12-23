const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const { UserRouter, ProductRouter,PurchaseRouter } = require("./routes");
const { errorMiddleware } = require("./middlewares");

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());


app.use("/products", ProductRouter);
app.use("/users", UserRouter);
app.use("/purchases", PurchaseRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-mundo",
  });
});

app.use(errorMiddleware);

module.exports = app;
