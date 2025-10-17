const express = require('express');
const router = express.Router();
const siteContoller = require('../controllers/siteController');

router.get("/" ,siteContoller.exibirProdutos);
router.get("/camisetas" ,siteContoller.exibirCamisas);


module.exports = router;