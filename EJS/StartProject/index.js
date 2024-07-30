import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));



// function adviceCall() {
//     const d = new Date();
//     let day = d.getDay();
//     if (day < 5) {
//         dayType = "a weekday";
//         adviceDay = "it's time to work hard";
//     } else {
//         dayType = "a weekend";
//         adviceDay = "it's time to have fun";
//     }
// }

// adviceCall();

app.post("/dateAdvice", (req, res) => {
    const d = new Date(req.body.todayIs).toString;
    let day = d.getDay();
    
    let dayType = "a weekday";
    let adviceDay = "it's time to work hard";

    if(day === 0 || day === 5){
        dayType = "the weekend";
        adviceDay = "it's time have some fun";
    }

    res.render("index.ejs", {
        dayT: dayType,
        advice: adviceDay,
        dayEJS: day
    });
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port);
























// var todayIs = new Date().getDay();

// if (todayIs = 6){
//     document.querySelector("h1").innerHTML = "aslkfjaslçdf";
// } else {
//     document.querySelector("h1").innerHTML = "123132";
// }

// function todayIs(req, res, next) {
//     var today = req.getDay();
//     var frase = "";
//     if (today < 5){
//         frase = "Hey! It's a weekday, it's time to work hard";
//     } else {
//         frase = "Hey! It's the weekend, it's time to have fun";
//     }
//     next();
// };

// app.use(todayIs);

// var today = new Date().getDay();
// alert("sldfhlkajdfh");
// if(today < 5) {
//     document.querySelector("h1").innerHTML = "aslçfjkaçsljf";
// } else {
//     document.querySelector("h1").innerHTML = "21312414";
// }
// var frase = "";


// app.post("/submit", (req, res) => {
//     var today = req.body.theDay.getDay();
//     console.log(today);
//     var today = req.body.todayIs.getDay();
//     if (today < 5){
//         frase = "Hey! It's a weekday, it's time to work hard";
//     } else {
//         frase = "Hey! It's the weekend, it's time to have fun";
//     }
//     res.send(frase);
// });