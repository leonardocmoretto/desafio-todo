const express = require('express');
const router = express.Router();

const TodosService = require('../services/todos')

router.get('/', async (req, res) => {
  try {
    let todos = await TodosService.all();
    res.json(todos);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/pending', async (req, res) => {
  try {
    let todos = await TodosService.allPending();
    res.json(todos);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/done', async (req, res) => {
  try {
    let todos = await TodosService.done();
    res.json(todos);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/markDone', async (req, res) => {
  try {
    let {id, done} = req.body;
    let todos = await TodosService.MarkDone(id, done);
    res.json(todos);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/', async (req, res) => {
  try {
    let {id} = req.body;
    let todos = await TodosService.Delete(id);
    res.json(todos);
  } catch (err) {
    res.status(400).send(err);
  }
});

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
  POST /
  BODY: {"description":"Implementar Task 1", "owner":{"name":"Leo", "job_title":"FullStack"} }
*/

/*
  PUT /markDone
  BODY: {"id":"5bd5394bc022aa69edaaf8b7", "done":true}
*/

/*
  DELETE /
  BODY: {"id":"5bd5394bc022aa69edaaf8b7"}
*/

module.exports = router;