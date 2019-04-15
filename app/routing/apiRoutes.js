var path = require("path");
var friends = require("../data/friends");
var fs = require("fs");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var userInput = req.body;
        var intscores = [];
        for (var i = 0; i < userInput.scores.length; i++) {
            intscores.push(parseInt(userInput.scores[i]));
        }
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: intscores
        }
        friends.push(newFriend);
        
        console.log(friends);
      
        xArray = [];
        for (var i = 0; i < friends.length-1; i++) {
            var user = friends[friends.length-1].scores;
            var difference = [];
            var x = 0;
             for (var n = 0; n < friends[0].scores.length; n++) {
                difference.push(Math.abs(friends[i].scores[n] - user[n]));
                x = x + difference[n];   
             }
             xArray.push(x);
            //  console.log(xArray);
        }
        console.log(xArray);
        var min = Math.min(...xArray);
        console.log(min);
        var index = xArray.indexOf(min);
        console.log(index)
        var match = friends[index];
        console.log(match);
        
        
        res.send(match);
        // res.json(match);
        
    });
}

