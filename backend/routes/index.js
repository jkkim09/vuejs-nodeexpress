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
  var sqlQuery = "SELECT COUNT(*) AS checkuser FROM user_info WHERE id = '" + params.userName +"' AND pwd = '" + params.userPwd + "'";
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
  var sqlQuery = "INSERT INTO user_info(id, pwd) VALUE ('" +  params.userName +"','" + params.userPwd + "')";
  var selectQuery = "SELECT COUNT(*) AS checkuser FROM user_info WHERE id = '" + params.userName +"'";
  try {
    // 회원 확인
    connection.query(selectQuery, function(err, rows) {
      if(err) throw err;
      if (rows[0].checkuser === 0) {
        connection.query(sqlQuery, function(err, rows) {
          if(err) throw err;
          res.send({
            code: 0,
            msg: '회원가입 완료'
          });
        });  
      } else {
        res.send({
          code: 0,
          msg: '이미 가입된 아이디입니다.'
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
})

/***
 * 문제 정보 가져오기
 */
router.get('/itemList', function (req, res, next) {
  var sqlQuery = "SELECT * FROM q_item";
  var itemList = []
  connection.query(sqlQuery, function(err, rows) {
    if(err) throw err;
    for (var index in rows) {
      var itemJson = {
        index: rows[index].item_num,
        title: rows[index].item_title,
        list: rows[index].item_list.split(','),
        answer: Number(rows[index].item_answer)
      }
      itemList.push(itemJson);
    }
    res.send({
      code: 0,
      msg: '이미 가입된 아이디입니다.',
      obj: itemList
    });
  });
});

router.get('/itemInsert', function (req, res, next) {
  var params = JSON.parse(req.query.item);
  var sqlQuery = "INSERT INTO q_item(item_title,item_list,item_answer) VALUE('"+ params.title +"', '"+ params.list +"', "+ params.answer + ")";
  connection.query(sqlQuery, function(err, rows) {
    if(err) throw err;
    res.send({
      code: 0,
      msg: '입력 완료'
    });
  });  
});

router.get('/itemDelete', function (req, res, next) {
  var params = req.query.item;
  var sqlQuery = "DELETE FROM q_item WHERE item_num = " + params;
  connection.query(sqlQuery, function(err, rows) {
    if(err) throw err;
    res.send({
      code: 0,
      msg: '삭제 완료'
    });
  });  
});

module.exports = router;
