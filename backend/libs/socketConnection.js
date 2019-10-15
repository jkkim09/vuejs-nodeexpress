var pointCheck = []
var socketIO = function(io) {
    io.on('connection', function(socket){
        // 문제 선택
        socket.on('viewSelectItem', function(data){
            console.log('viewSelectItem message');
            io.emit('viewSelectItem', data.obj);
        });

        // 페이지 전환
        socket.on('pageChange', function(data){
            console.log('pageChange message');
            io.emit('pageChange', data.obj);
        });

        // 유저가 선택한 답안
        socket.on('userAnswer', function(data) {
            console.log('userAnswer');
            const userAnswer = data.obj
            if (userAnswer.answer) {
                pointCheck.push(userAnswer);
            }
            // value 기준으로 정렬
            pointCheck.sort(function (a, b) {
                if (a.time > b.time) {
                  return 1;
                }
                if (a.time < b.time) {
                  return -1;
                }
                // a must be equal to b
                return 0;
            });
            pointCheck = getUniqueObjectArray(pointCheck, 'user')
        });

        // 현재 정답자
        socket.on('currentAnswer', function () {
            socket.emit('currentAnswer', pointCheck);
            // 초기화
            pointCheck = []
        })
    });
}

function getUniqueObjectArray(array, key) {
    return array.filter((item, i) => {
      return array.findIndex((item2, j) => {
        return item[key] === item2[key];
      }) === i;
    });
}

module.exports = socketIO;
