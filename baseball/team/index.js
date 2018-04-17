const express = require('express');
const router = express.Router();
let pageController = require('./controller');

// Routes
router.get('/pages', pageController.getPages);
router.get('/team', pageController.getPage);
router.get('/all', pageController.all);
router.get('/combine', pageController.combine);
router.put('/cache', pageController.pages);
router.put('/pageCache', pageController.pageCache);
router.post('/dummy', pageController.dummy);
router.post('/insertTo', pageController.insertToLocalJsonFile);
router.post('/initilizeModels', pageController.initilizeModels);

module.exports = router;