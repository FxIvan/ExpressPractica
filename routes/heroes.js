const express = require('express')
const router = express.Router()

const heroesController = require('../controller/heroesController')

router.get('/', heroesController.index)
router.get('/heroes', heroesController.datos)
router.get('/detalle/:id', heroesController.datosProfresionales)
router.get('/bio/:id/:ok?',heroesController.bioOk)
router.get('/creditos' , heroesController.creditos)

module.exports = router