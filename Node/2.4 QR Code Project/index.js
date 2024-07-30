/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
// var qr = require("qr-image");
// var fs = require("fs");
import fs from "fs";
import {writeFile} from "node:fs";

inquirer
.prompt([
    {
        type: "input",
        name: "userURL",
        message: "please enter your URL: ",
    }
])
.then((answers) => {
    var qr_svg = qr.image(answers.userURL, {type: "png"});
    qr_svg.pipe(fs.createWriteStream(answers.userURL + ".png"));
    fs.writeFile("url_data.txt", answers.userURL, (err) => {
        if (err) throw err;
        console.log("the file has been saved!");
    });  

})
.catch((error) => {
    if (error.isTtyError){
        console.log("couldn't render qr-code, something went wrong")
    }
})



// var qr_svg = qr.image('I love QR! 4', {type:'svg'});
// qr_svg.pipe(fs.createWriteStream('i_love_qr_4.svg'));

// var svg_string = qr.imageSync('I love QR!', {type: 'svg'});