"use strict";
var sum = 0;
var boxes = 0;
var howMany = prompt('how many cases?');
for (i = 0; i < howMany; i++) {
    var t = [];
    var people = prompt('how many people?');
    var donutsInBox = prompt('how many donuts is in a box?');
    for (j = 0; j < people; j++) {
        var time = prompt('time');
        var donuts = 24 * 60 * 60 / time;
        donuts = Math.floor(donuts);
        sum += donuts;
    }
    boxes = sum / donutsInBox;
    boxes = Math.ceil(boxes);
    console.log(boxes);
}
