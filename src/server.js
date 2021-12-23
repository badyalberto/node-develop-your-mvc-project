const express = require("express");
const { json } = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const { UserRouter, ProductRouter } = require("./routes");
const { errorMiddleware } = require("./middlewares");

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());
app.use(errorMiddleware);

app.use("/products", ProductRouter);
app.use("/users",errorMiddleware, UserRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-mundo",
  });
});

module.exports = app;
