const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/siteController');

router.get("/" ,produtosController.exibirProdutos);
router.get("/camisetas" ,produtosController.exibirCamisas);


module.exports = router;