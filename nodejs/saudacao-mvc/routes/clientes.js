// clientes.js

const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController')

router.get("/", clientesControllerController.fotmulario);
router.get('/formulario', clientesControllerController.index);
router.post("/login", clientesControllerController.login);

module.exports = router;

