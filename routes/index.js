var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql',
    insecureAuth: true
});
db.connect(function(err) {
    if (err) console.log(err);
    else console.log('connect data');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/bangkrajao', function(req, res, next) {
    res.render('bangkrajao', { title: 'บางกระเจ้า' });
});

router.get('/bangpu', function(req, res, next) {
    res.render('bangpu', { title: 'สถานตากอากาศบางปู' });
});

router.get('/elawan', function(req, res, next) {
    res.render('elawan', { title: 'พิพิธภัณฑ์ช้างเอราวัณ' });
});

router.get('/farmcroc', function(req, res, next) {
    res.render('farmcroc', { title: 'ฟาร์มจระเข้' });
});

router.get('/favorite', function(req, res, next) {
    res.render('favorite', { title: 'รายการโปรด' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'ติดต่อ' });
});

router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Home page' });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

router.get('/oldcity', function(req, res, next) {
    res.render('oldcity', { title: 'เมืองโบราณ' });
});

router.get('/pomprajun', function(req, res, next) {
    res.render('pomprajun', { title: 'ป้อมพระจุลจอมมเกล้า' });
});

router.get('/travel', function(req, res, next) {
    res.render('travel', { title: 'Travel SamutPrakan' });
});

router.get('/watasokaram', function(req, res, next) {
    res.render('watasokaram', { title: 'วัดอโศการาม' });
});

router.get('/watbangpleeyai', function(req, res, next) {
    res.render('watbangpleeyai', { title: 'วัดบางพลีใหญ่' });
});

router.get('/watprasamutjedi', function(req, res, next) {
    res.render('watprasamutjedi', { title: 'วัดพระสมุทรเจดีย์' });
});

router.get('/sendMessage/:name/:email/:phone/:message', function(req, res) {
    var name = req.params.name;
    var email = req.params.email;
    var phone = req.params.phone;
    var message = req.params.message;
    console.log(name + email + phone + message);
    sql = "INSERT INTO test(name,email,phone,message)VALUES('" + name + "'," + "'" + email + "'," + "'" + phone + "'," + "'" + message + "'" + ");";
    console.log(sql);
    db.query(sql, function(err, result) {
        if (err) console.log(err);
        else console.log(result);
    });
});

module.exports = router;