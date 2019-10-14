var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var dbconfig   = require('../data/database');
var connection = mysql.createConnection(dbconfig);

/***
 * 첫화면 반환
 */
router.get('/', function(req, res, next) {
  // res.render('index', { title: path.join(__dirname, '../views')  });
  res.sendFile(path.join(__dirname, '../views/index.html'));
});


/***
 * User 확인 (Admin, User)
 */
router.get('/check', function(req, res, next) {
  var userCheck = req.query.user;
  var user = 'user'
  if (userCheck && (userCheck === '83admin83')) {
    user = 'admin'
  }
  res.send({
    code: 0,
    user: user
  });
});

/***
 * User Login
 */
router.get('/login', function(req, res, next) {
  var params = req.query;
  var sqlQuery = "SELECT COUNT(*) AS checkuser FROM user_table WHERE user_name = '" + params.userName +"' AND user_pwd = '" + params.userPwd + "'";
  connection.query(sqlQuery, function(err, rows) {
    if(err) throw err;
    if (rows[0].checkuser) {
      res.send({
        code: 0,
        msg: '로그인 성공'
      });
    } else {
      res.send({
        code: 5,
        msg: '이름 or 비밀번호가 일치하지 안습니다.'
      });
    }
  });
});

/***
 * 회원가입
 */
router.get('/addUser', function (req, res, next) {
  var params = req.query;
  var sqlQuery = "INSERT INTO user_table(user_name, user_pwd) VALUE ('" +  params.userName +"','" + params.userPwd + "')";
  console.log(sqlQuery);
  try {
    connection.query(sqlQuery, function(err, rows) {
      if(err) throw err;
      console.log(rows);
    });    
  } catch (error) {
    console.log(error);
  }
})
module.exports = router;
