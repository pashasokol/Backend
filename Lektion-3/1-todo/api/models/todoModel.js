const Todo = require("./todoSchema");

exports.getTodos = (req, res) => {
  Todo.find()
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Something went wrong fetching the todos",
        err,
      })
    );
};

exports.getOneTodo = (req, res) => {
  Todo.findOne({ _id: req.params.id })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Something went wrong fetching the todos",
        err,
      })
    );
};

exports.saveTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  todo.save()
    .then((data) => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: "Todo created",
        data,
      });
    })
    .catch((err) =>
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Failed to create todo",
        err,
      })
    );
};

exports.deleteTodo = (req,res)  => {
    Todo.deleteOne({ _id: req.params.id })
    .then((data) => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: "Todo deleted",
          data,
        });
      })
      .catch((err) =>
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: "Failed to delete todo",
          err,
        })
      );
}


exports.updateTodo = (req,res)  => {
    Todo.updateOne({_id: req.params.id}, req.body)
    .then((data) => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: "Todo updated",
          data,
        });
      })
      .catch((err) =>
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: "Failed to update todo",
          err,
        })
      );

}