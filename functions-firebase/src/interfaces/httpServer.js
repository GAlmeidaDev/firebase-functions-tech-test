const express = require('express');
const bodyParser = require('body-parser');
const CreateRecordUseCase = require('../application/ports/input/CreateRecordUseCase');
const app = express();
app.use(bodyParser.json());

const createRecordUseCase = new CreateRecordUseCase();

app.post('/records', async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ error: 'O campo "name" é obrigatório' });
    }

    const newRecord = await createRecordUseCase.execute(name);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno ao criar registro' });
  }
});

module.exports = app;
