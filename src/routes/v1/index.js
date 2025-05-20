const express = require('express');

const { InfoController, EmailController } = require('../../controllers');

const router = express.Router();

// GET : /api/v1/info
router.get('/info', InfoController.info);

// POST : /api/v1/ticket
router.post('/ticket', EmailController.create);

module.exports = router;
