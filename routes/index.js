var express = require('express');
var sequelize = require('sequelize');
var router = express.Router();

var charsContext  = require('../db/models/chars');
const { guildDto, guildListDto } = require('../dto/chars/guildDto');

/* GET home page. */
router.get('/', function(req, res, next) {
  charsContext.guild.findAll({
    order: sequelize.col('guildid')
  }).then(function(guilds) {
    var _guildListDto = new guildListDto(guilds);

    res.render('index', {
      title: 'Nostralia Logs',
      guilds: _guildListDto
    });
  });
});

module.exports = router;
