var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('galeria', 
  { title: 'AdrDG | Webmaster .. Galería' },
  { isGaleria: true }
  ); // view/galeria.hbs
});

module.exports = router;