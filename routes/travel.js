var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('travel', { title: 'Travel SamutPrakan' });
});
router.get('/samutprakan/:search', function(req, res) {
    var search = req.params.search;
    var newsearch;
    if (search.trim() == 'place') {

    } else if (search.trim() == 'safe') {

    }
});
module.exports = router;