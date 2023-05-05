const express = require('express');
const router = express.Router();

const skillController = require('../controllers/skills');

router.get('/', skillController.index);

router.get('/new', skillController.newSkill);

router.get('/:id', skillController.show);

router.get('/:id/edit', skillController.edit);

router.post('/', skillController.create);

router.delete('/:id', skillController.deleteSkill);

router.put('/:id', skillController.update);

module.exports = router;