var world  = require('../db/models/world');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  world.area_template.findAll({

  }).then(function(area_templates) {
    res.render('index', {
      title: 'Nostralia Logs',
      area_templates: area_templates
    });
  });
});

module.exports = router;
