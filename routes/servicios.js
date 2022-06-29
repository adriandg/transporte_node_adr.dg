var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('nosotros', 
  { title: 'AdrDG | Webmaster .. servicios' },
  { isServicios: true }
  ); // view/servicios.hbs
});

module.exports = router;