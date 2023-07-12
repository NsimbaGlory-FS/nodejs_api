const { toFormData } = require("axios");
const express = require("express");
const todosRouter = express.Router();
const { todoService, todoServiceById } = require("../services/todoService");

todosRouter.get("/", (req, res, next) => {
  console.log("this my test");

  todoService()
    .then((result) => {
      res.status(200).json(result.data);
    })

    .catch((error) => {
      res.status(500).json({
        error: {
          message: error.message,
        },
      });
    });
});

todosRouter.get("/:id", (req, res, next) => {
  console.log(req.params.id);

  todoServiceById(req.params.id)
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

module.exports = todosRouter;
