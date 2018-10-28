const express = require('express');
const router = express.Router();

const TodosService = require('../services/todos')

router.post('/', async (req, res) => {
  try {
    let {description, owner} = req.body;
    let todos = await TodosService.Create({description, owner});
    res.json(todos);
  } catch (err) {
    res.status(400).send(err);
  }
});

/*
  POST
  BODY: {"description":"Implementar Task 1", "owner":{"name":"Leo", "job_title":"FullStack"} }
*/


module.exports = router;