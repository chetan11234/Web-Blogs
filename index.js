import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/structure/index.html");
})
app.post("/view", (req, res) => {
    console.log("post is accepting");
    res.render("view.ejs", { Title: req.body.title, Description: req.body.description, Media: req.body.media });
});

app.post("/update", (req, res) => {
    res.render("update.ejs", {
        Title: req.body.title || "",
        Description: req.body.description || "",
        Media: req.body.media || ""
    });
    console.log(req.body.description);
});


app.delete("/delete", (req, res) => {

});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`port ${port} is listening`);
})