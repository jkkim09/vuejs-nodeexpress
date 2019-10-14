var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.io.on('connection', function(socket){
    socket.on('client message', function(data){
        io.emit('server message', data.message);
    });
  });
  res.send('respond with a resource.');
});

module.exports = router;
