require('file-loader?name=index.html!./index.html');
require("./styles.css");
const p5 = require('p5');
const $ = require('jquery');


window.setup = () => {
    createCanvas(500, 500);
}

window.draw = () => {
    background(100);
    noStroke();
    ellipse(100, 100 , 50 , 50);
}
