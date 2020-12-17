var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travel',
    insecureAuth: true
});
db.connect(function(err) {
    if (err) console.log(err);
    else console.log('Connect Success!!');
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

router.get('/detail', function(req, res, result) {
    db.query("select detail from spk", function(err, rows) {
        res.send(String(rows[0].detail));
    });
});

router.get('/kamkwan', function(req, res, result) {
    db.query("select kamkwan from spk", function(err, rows) {
        res.send(String(rows[0].kamkwan));
    });
});
// ดึงข้อมูล Contact ออกมา
// router.get('/usercontact', function(req, res, next) {
//     con.query('SELECT * FROM contact', function(err, rows) {
//         // res.send(rows[2].email);
//         var datadetails = '';
//         for (let i = 0; i < rows.length; i++) {
//             datadetails += String(rows[i].no) + "." + rows[i].email + " | " + rows[i].details + "<br>"
//         }
//         res.send(datadetails)
//     })
// })

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

router.post('/contact', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;
    var sql = "insert into contact(name,email,phone,message)";
    sql += " values('" + name + "','" + email + "','" + phone + "','" + message + "')";
    console.log("name: \n" + name + "email: \n" + email + "phone: \n" + phone + "message: \n" + message);
    db.query(sql, function(err, result) {
        if (err) {
            res.send("ส่งไม่สำเร็จ");
        } else {
            //   console.log(result)
            res.send("ส่งแล้ว");
        }
    });
});

router.post('/register', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.cpassword;
    var sql = "insert into reg(email,name,pass,confirmpassword)";
    sql += " values('" + email + "','" + name + "','" + pass + "','" + cpassword + "')";

    if (password == cpassword) {
        db.query(sql, function(err, result) {
            if (err) {
                res.send("รหัสผ่านไม่ตรงกัน");
            } else {
                //   console.log(result)
                res.send("สำเร็จ");
            }
        });
    }

});

router.get('/cc', function(req, res, next) {
    var sql = "SELECT * FROM `contact` WHERE 1";
    db.query(sql, function(err, result) {
        res.send(result);
    });
});
module.exports = router;