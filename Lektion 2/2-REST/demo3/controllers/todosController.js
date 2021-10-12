const express = require('express');
const router = express.Router();

const todoModel = require('../models/todoModel');

router.get('/', todoModel.getTodos);

router.post('/', todoModel.saveTodo);

module.exports = router;