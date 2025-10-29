// clientes.js

const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController')

router.get("/", clientesController.index);
router.get('/formulario', clientesController.formulario);
router.post("/login", clientesController.login);

module.exports = router;

