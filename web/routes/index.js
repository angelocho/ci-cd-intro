var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nimble-ICE' });
});

/* GET ice-flakes resource */
// router.get('/ice-flakes', function(req, res, next) {
//   res
//     .status(201)
//     .json({ 
//       resource: 'ice-flakes',
//       count: 100,
//       shape: 'circle'
//     });
// });

module.exports = router;