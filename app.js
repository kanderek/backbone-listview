var express = require('express');
var app = express();

// var fs = require('fs');
// var q = require('q');

var bodyParser = require('body-parser');

var http = require('http');

var server = http.createServer(app);
var port = process.env.PORT || 3000;

server.listen(port);

console.log("server listening at port " + port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

var collectionData = [
    {
        id: 1,
        name: 'Bobby',
        title: 'talker',
        remove: true
    },
    {
        id: 2,
        name: 'Johnny',
        title: 'gossip',
        remove: false
    },
    {
        id: 3,
        name: 'Franny',
        title: 'secret keeper',
        remove: false
    },
    {
        id: 4,
        name: 'tommy',
        title: 'athlete',
        remove: true
    },
    {
        id: 5,
        name: 'Barb',
        title: 'singer',
        remove: false
    },
    {
        id: 6,
        name: 'Christy',
        title: 'baker',
        remove: true
    }
];

// app.get('/', function (req, res) {

//     // res.send('hello World');
//     var done = finalhandler(req, res);
//     serve(req, res, done);
// });

app.post('/collection',
    function (req, res) {
        console.log('new collection posted');

        var newItem = req.body;
        collectionData.push(newItem);
        
        res.send(200);
    });

app.get('/collection', function (req, res) {

    res.json(collectionData);

});
