var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./data/data.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return
    }
    res.send(data);
  });
});

module.exports = router;
