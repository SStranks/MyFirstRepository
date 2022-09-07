const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.route('/').get(viewController.getInitial);
router.route('/:id').get(viewController.loadMore);

module.exports = router;
