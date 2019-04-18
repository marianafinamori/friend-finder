// ===============================================================================
// DATA
// Below data will hold all people who submitted answers.
// Initially we just set some seeds
// ===============================================================================

var friendsArray = [
    {
        "name": "Ethan",
        "photo": "https://cdn.pixabay.com/photo/2016/12/27/21/49/application-1934972__480.jpg",
        "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
      },

      {
        "name": "Daniel",
        "photo": "https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597179_1280.jpg",
        "scores": [5, 1, 1, 1, 1, 1, 2, 1, 5, 1]
      },

      {
        "name": "Mia",
        "photo": "https://cdn.pixabay.com/photo/2016/07/26/22/28/young-1544115_1280.jpg",
        "scores": [5, 3, 4, 2, 5, 1, 2, 3, 5, 5]
      },

      {
        "name": "Molly",
        "photo": "https://cdn.pixabay.com/photo/2016/01/05/17/17/watch-1122956_1280.jpg",
        "scores": [5, 2, 5, 3, 4, 1, 3, 1, 3, 5]
      }


    ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;

  //Alternative data below (should be saved in a friends.json file) could be used in case we 
  //wanted to record user's data after quitting 
  //the server. For security reasons I decided not to record new data. The code for the 
  //alternative apiRoute.js is in a separate commented file saved as alternativeapiRoute.js
//   [
//     {
//        "name": "Ethan",
//        "photo": "https://cdn.pixabay.com/photo/2016/12/27/21/49/application-1934972__480.jpg",
//        "scores": [
//           5,
//           1,
//           4,
//           4,
//           5,
//           1,
//           2,
//           5,
//           4,
//           1
//        ]
//     },
//     {
//        "name": "Daniel",
//        "photo": "https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597179_1280.jpg",
//        "scores": [
//           5,
//           1,
//           1,
//           1,
//           1,
//           1,
//           2,
//           1,
//           5,
//           1
//        ]
//     },
//     {
//        "name": "Mia",
//        "photo": "https://cdn.pixabay.com/photo/2016/07/26/22/28/young-1544115_1280.jpg",
//        "scores": [
//           5,
//           3,
//           4,
//           2,
//           5,
//           1,
//           2,
//           3,
//           5,
//           5
//        ]
//     },
//     {
//        "name": "Molly",
//        "photo": "https://cdn.pixabay.com/photo/2016/01/05/17/17/watch-1122956_1280.jpg",
//        "scores": [
//           5,
//           2,
//           5,
//           3,
//           4,
//           1,
//           3,
//           1,
//           3,
//           5
//        ]
//     },
//     {
//        "name": "Jake",
//        "photo": "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
//        "scores": [
//           5,
//           5,
//           5,
//           3,
//           5,
//           3,
//           4,
//           5,
//           4,
//           5
//        ]
//     }
//  ]

  