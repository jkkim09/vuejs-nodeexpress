var pointCheck = []
var socketIO = function(io) {
    io.on('connection', function(socket){
        // 문제 선택
        socket.on('viewSelectItem', function(data){
            data.obj['startTime'] = Date.now() + 10000;
            io.emit('viewSelectItem', data.obj);
        });

        // 페이지 전환
        socket.on('pageChange', function(data){
            io.emit('pageChange', data.obj);
        });

        // 유저가 선택한 답안
        socket.on('userAnswer', function(data) {
            const userAnswer = data.obj
            if (userAnswer.answer) {
                pointCheck.push(userAnswer);
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
            }
        });

        // 현재 정답자
        socket.on('currentAnswer', function () {
            socket.emit('currentAnswer', pointCheck);
            // 초기화
            pointCheck = []
        });

        //버튼선택
        socket.on('buttonSelect', function(data){
            console.log(data.obj);
            io.emit('buttonSelect', data.obj);
        });

        //버튼리셋
        socket.on('buttonReset', function(data){
            io.emit('buttonSelect', data.obj);
        });
    });
}
/**
 * 중복 제거
 * 
 * @param {} array 
 * @param {*} key 
 */
function getUniqueObjectArray(array, key) {
    return array.filter((item, i) => {
      return array.findIndex((item2, j) => {
        return item[key] === item2[key];
      }) === i;
    });
}

module.exports = socketIO;
