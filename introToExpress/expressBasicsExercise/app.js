// =====================================
// SETUP
// =====================================
var express = require('express');
var app = express();

// =====================================
// ROUTES
// =====================================

// var animals = [{
//         name: 'pig',
//         says: 'Oink'
//     },
//     {
//         name: 'dog',
//         says: 'Woof Woof!'
//     },
//     {
//         name: 'cow',
//         says: 'Moo'
//     },
//     {
//         name: 'cat',
//         says: 'Meow'
//     },
//     {
//         name: 'duck',
//         says: 'Quak Quak!'
//     }
// ];
app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});
app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        dog: "Woof Woof!",
        cow: "Moo",
        cat: "Meow",
        duck: "Quak Quak"
    };
    var sound = sounds[animal];

    res.send("The " + animal + " says '" + sound + "'");
    // animals.forEach(function (animalSays) {
    //     if (animal === animalSays.name) {
    //         res.send("The " + animalSays.name + " says '" + animalSays.says + "'");
    //     }
    // });
});
app.get("/repeat/:word/:count", function (req, res) {
    var word = req.params.word;
    var count = parseInt(req.params.count);
    var printThis = "";
    for (var i = 0; i < count; i++) {
        printThis += word + " ";
    }
    res.send(printThis);
});
app.get("*", function (req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

// =====================================
// LISTEN TO ALL REQUESTS - START SERVER
// =====================================
app.listen(3000, function () {
    console.log("Server started at port 3000");
});