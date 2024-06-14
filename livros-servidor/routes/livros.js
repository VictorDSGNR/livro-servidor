const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
const { default: mongoose } = require('mongoose');

router.get('/', async (req, res) => {
    try {
      const livros = await obterLivros();
      res.json(livros);
    } catch (error) {
      res.status(500).send('Erro ao obter livros');
    }
});

router.post('/', async (req, res) => {
    try {
      const livro = req.body;
      livro._id = new mongoose.Types.ObjectId(),
      await incluir(livro);
      res.status(200).send('Inclusao efetuada');
    } catch (error) {
      console.log(error)
      res.status(500).send('Erro ao incluir livro');
    }
});

router.delete('/:_id', async (req, res) => {
    try {
      const _id = req.params._id;
      await excluir(_id);
      res.status(200).send('Livro excluído com sucesso');
    } catch (error) {
      res.status(500).send('Erro ao excluir livro');
    }
});

module.exports = router;
