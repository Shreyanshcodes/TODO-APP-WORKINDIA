var express = require('express');
var router = express.Router();
var db = require('../DB');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM todo";
    db.query(sql, function(err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!'})
      }
      res.json(rows)
    })
  });


router.post('/', function(req, res, next) {
    var title = req.body.title;
    var description = req.body.description;
    var category = req.body.category;
    var due_date = req.body.due_date;
  
    var sql = `INSERT INTO todo(title, description, category, due_date) VALUES ("${title}", "${description}", "${category}", "${due_date}")`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status': 'success', 'status_code': '200'})
    })
  });
  module.exports = router;