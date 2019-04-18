//This code could be used in case we wanted to record the user's inputs and keep it after 
// the server is quitted. I decided not to use because this app does not have security for user's 
// real data. 
// In this case, the friends.js file should be replaced by a friends.json file and all data put in 
// an array (see comments at the end of friends.js).
// var path = require("path");
// var fs = require("fs");
// var data = fs.readFileSync(path.resolve((__dirname, "./app/data/friends.json")));

// var friends = JSON.parse(data);
// console.log(friends);

// module.exports = function(app) {

//     app.get("/api/friends", function(req, res) {
//         res.json(data);
//     });

//     app.post("/api/friends", function(req, res) {
       
//         var userInput = req.body;
//         var intscores = [];
//         for (var i = 0; i < userInput.scores.length; i++) {
//             intscores.push(parseInt(userInput.scores[i]));
//         }
//         var newFriend = {
//             name: req.body.name,
//             photo: req.body.photo,
//             scores: intscores
//         }
//         console.log(newFriend);
  
     
//     friends.push(newFriend)
//     console.log("new array" + friends)

//         function added() {
//             console.log("adding");
//         }
        
//         xArray = [];
//         for (var i = 0; i < friends.length-1; i++) {
//             var user = newFriend.scores;
//             var difference = [];
//             var x = 0;
//              for (var n = 0; n < newFriend.scores.length; n++) {
//                 difference.push(Math.abs(friends[i].scores[n] - user[n]));
//                 x = x + difference[n];   
//              }
//              xArray.push(x);
//             //  console.log(xArray);
//         }
//         console.log(xArray);
//         var min = Math.min(...xArray);
//         console.log(min);
//         var index = xArray.indexOf(min);
//         console.log(index)
//         var match = friends[index];
//         console.log(match);
//         res.send(match);
//         //Updating friends.json
//         var dataclean = [];
//         var newFriendsArray = JSON.stringify(friends, null, 3)
//         fs.writeFileSync("./app/data/friends.json", dataclean, added);
//         fs.writeFileSync("./app/data/friends.json", newFriendsArray, added);
//     });
// }