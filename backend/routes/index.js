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

/**
 * 문제 등록
 */
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

/***
 * 문제 삭제
 */
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

/**
 * rank 정산
 */
router.get('/lank', function (req, res, next) {
  var params = req.query;
  var itemList = params.item
  var itemLength = (itemList.length > 5) ? 5 : itemList.length
  for (var i=0; i<itemLength; i++) {
    var indexItem = JSON.parse(itemList[i]);
    var point = 0;
    var index = indexItem.index;
    var user = indexItem.user
    switch (i) {
      case 0:
          point = 5;
        break;
      case 1:
          point = 4;
        break;
      case 2:
          point = 3;
        break;
      case 3:
          point = 2;
        break;
      case 4:
          point = 1;
        break;
    }
    rankQueryFunction(user, point, itemLength - 1, i);
  }
  res.send({
    code: 0
  });
});

/**
 * total rank return 
 */
router.get('/totalRank', function (req, res, next) {
  var rankOrderByQuery = "SELECT a.id,b.total_point, b.befor_rank, b.after_rank FROM user_info AS a JOIN user_point AS b WHERE a.num = b.num ORDER BY total_point DESC";
  connection.query(rankOrderByQuery, function(err, rows) {
    if(err) throw err;
    res.send({
      code: 0,
      items: rows
    });
  });
});

router.get('/pointDelete', function (req, res, next) {
  var pointDeleteQuery = 'DELETE FROM user_point';
  connection.query(pointDeleteQuery, function (err, rows) {
    res.send({
      code: 0
    });
  });
});


/**
 * rank insert or update query
 */
function rankQueryFunction(user, point, end, index) {
  const selectQuery = "SELECT num FROM user_info WHERE id = '"+ user +"'";
  connection.query(selectQuery, function(err, a) {
    const indexPoint = point;
    const indexUser = user;
    const userSelectQuery = "SELECT num FROM user_point WHERE num = "+ a[0].num;
    connection.query(userSelectQuery, function(err, b) {
        // 포인트 정보에 정보가 있는사람
        if (b[0]) {
          pointUpdate();
          console.log(b[0]);
          const userInsertQuery = "SELECT total_point FROM user_point WHERE num =" + b[0].num;
          connection.query(userInsertQuery, function(err, c) {
            // 포인트가 0, undefined 가 아닐때.
            if (c[0].total_point) {
                let sumPoint = indexPoint + c[0].total_point;
                const pointUpdateQuery = "UPDATE user_point SET total_point = " + sumPoint + " WHERE num = "+ b[0].num;
                connection.query(pointUpdateQuery, function(err, d) {
                  if (end === index) {
                    rankOrderby();
                  }
                });
            } else {
              const pointInsertQuery = "INSERT INTO user_point(num, total_point) VALUE("+ b[0].num +", "+ indexPoint +")"
              connection.query(pointInsertQuery, function(err, e) {
                if (end === index) {
                  rankOrderby();
                }
              });
            }
          });
        } else {
          // 포인트 정보에 정보가 없는사람
          pointInsert(a[0].num, indexPoint, end, index);
        }
    });
  });
}

function pointUpdate () {
  console.log('point 가 있는사람');
}

function pointInsert (nuserNum, point, end, index) {
  console.log('point 가 없는사람', nuserNum, point);
  const pointInsertQuery = "INSERT INTO user_point(num, total_point) VALUE("+ nuserNum +", "+ point +")"
  connection.query(pointInsertQuery, function(err, f) {
    if (end === index) {
      rankOrderby();
    }
  });
}

function rankOrderby () {
  const orderByQuery = "SELECT * FROM user_point ORDER BY total_point DESC";
  connection.query(orderByQuery, function(err, rows) {
    for (var i in rows) {
      const indexItem = rows[i];
      const beforRank = indexItem.befor_rank;
      const afterRank = indexItem.after_rank;
      const userNum = indexItem.num;
      rankUpdateQurey(userNum, beforRank, afterRank, Number(i)+1);
    }
  });
}

function rankUpdateQurey (userNum, beforRank, afterRank, currentRank) {
  console.log(userNum, beforRank, afterRank, currentRank);
  // 이전 기록이 있으면
  if (afterRank) {
    console.log('이전 기록있는사람');
    const beforRankUpdate = "UPDATE user_point SET befor_rank = "+ afterRank +" WHERE num = " + userNum;
    connection.query(beforRankUpdate, function(err, a) {
      const afterRankUpdate = "UPDATE user_point SET after_rank = "+ currentRank +" WHERE num = " + userNum;
      connection.query(afterRankUpdate, function(err, c) {
      });
    });
  } else {
    console.log('이전 없는사람');
    const afterRankUpdate = "UPDATE user_point SET after_rank = "+ currentRank +" WHERE num = " + userNum;
    connection.query(afterRankUpdate, function(err, b) {
    });
  }
}


module.exports = router;
