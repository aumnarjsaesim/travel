var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql'
});
db.connect(function(err) {
    if (err) console.log("Database error");
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

router.get('/pewa', function(req, res, next) {
    res.render('pewa', { title: 'เพวา ลักชัวรี เซอร์วิส เรสซิเดนซ์' });
});

router.get('/proud', function(req, res, next) {
    res.render('proud', { title: 'พราวด์ การ์เด้น อพาร์ตเมนท์' });
});

router.get('/authong', function(req, res, next) {
    res.render('authong', { title: 'อู่ทอง แมนชั่น บางปู' });
});

router.get('/ler', function(req, res, next) {
    res.render('ler', { title: 'โรงแรมเลอ เมอริเดียน สุวรรณภูมิ กอล์ฟ รีสอร์ท แอนด์ สปา' });
});

router.get('/airport', function(req, res, next) {
    res.render('airport', { title: 'แอร์พอร์ท 17 อพาทร์เทล' });
});

module.exports = router;