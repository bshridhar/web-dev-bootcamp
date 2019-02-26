var express = require("express");
var app = express();
// specify the directory to serve in the web app
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/posts", function (req, res) {
    var posts = [{
            "words": "nemo facere corporis",
            "sentence": "Asperiores mollitia qui molestiae.",
            "sentences": "Modi nostrum impedit qui labore excepturi laboriosam illo ullam at. Pariatur illo itaque qui. Ipsum vel veritatis.",
            "paragraph": "Repellendus unde voluptas officiis quisquam aliquam. Quaerat nostrum officia illum blanditiis aut iste ut. Est harum quisquam. Et quae mollitia modi odit ut et. Temporibus quae velit quia harum itaque cum."
        },
        {
            "words": "ut porro in",
            "sentence": "Voluptatem omnis ut labore in adipisci.",
            "sentences": "Sunt voluptates ipsam alias iusto quia tenetur aperiam sint quos. Rerum magnam adipisci debitis. Et minima error perspiciatis corrupti ipsum asperiores ad. Officiis officiis doloribus fuga voluptatibus praesentium aliquam vel.",
            "paragraph": "Voluptates earum voluptate eum id labore exercitationem consectetur pariatur nam. Sit ea praesentium et amet natus facilis. Veritatis est eveniet eum ipsa enim magnam quia sed ipsa. Voluptas cumque amet aspernatur cum et animi amet. Dolorum qui quasi. Eligendi quasi rem."
        },
        {
            "words": "provident vero sunt",
            "sentence": "Sed dolorum voluptates quae eaque dolor est.",
            "sentences": "Vitae eveniet possimus. Similique et doloribus amet. Est labore temporibus distinctio enim labore officiis iure eum aperiam.",
            "paragraph": "Eum quis enim ea tempore est. Fugiat laudantium tenetur sed aliquam tenetur et dicta minus repellendus. Nostrum aspernatur odio non."
        }
    ]
    res.render("posts", {
        posts: posts
    });
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", {
        thingVar: thing
    });
});

app.get("*", function (req, res) {
    res.render("404")
});

app.listen(3000, function () {
    console.log("Server has been started");
});