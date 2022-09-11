const path = require("path")
const express = require("express");
const app = express();
const EJS = require("ejs");
const { sendEmail } = require("./public/js/email");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("pages/index.ejs");
});

app.post("/", async (req, res) => {
    console.log("POST", req.body,);

    const { email, fullName, model } = req.body;

    try {
        await sendEmail(email, fullName, model);
        res.status(201).send({ success: true, message: "sent!", data: { email, fullName, model } });
    } catch (e) {
        res.status(400).send(e);
    }
    
})

app.listen(3000)