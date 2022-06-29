var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('nosotros', 
  { title: 'AdrDG | Webmaster .. nosotros' },
  { isNosotros: true }
  ); // view/nosotros.hbs
});

module.exports = router;