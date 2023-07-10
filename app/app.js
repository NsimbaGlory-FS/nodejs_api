const express = require("express");
const { status } = require("express/lib/response");
const todosRouter = require("../router/todosRouter");

const app = express();
// http://locahost:3000
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Service is up" });
});
//router middleware
app.use("/todos/id", todosRouter);

// add middleware to handle error and bad url paths
app.use((req, res, next) => {
  const error = new Error("NOT FOUND !!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error, status || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

module.exports = app;
