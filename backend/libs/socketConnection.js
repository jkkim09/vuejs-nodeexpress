var socketIO = function(io) {
    io.on('connection', function(socket){
        socket.on('viewSelectItem', function(data){
            console.log('viewSelectItem message');
            console.log(data.obj);
            io.emit('viewSelectItem', data.obj);
        });
        socket.on('pageChange', function(data){
            console.log('pageChange message');
            io.emit('pageChange', data.obj);
        });
    });
}

module.exports = socketIO;
