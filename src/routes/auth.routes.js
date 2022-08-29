const express = require('express');
const authControllers = require('../controllers/auth.controller');
const { registerSchema } = require('../schema/candidate.schema');
const { validateDTO } = require('../schema/validate.dto');

const router = express.Router();

router.post('/signin', validateDTO(registerSchema), authControllers.signin);

module.exports = router;
