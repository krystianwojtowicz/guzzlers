let sum=0;
let boxes=0;
const howMany = prompt('how many cases?');
for (i = 0; i < howMany; i++) {
    let t = [];
    let people = prompt('how many people?')
    let donutsInBox = prompt('how many donuts is in a box?')
    for (j = 0; j < people; j++) {
        let time = prompt('time')
        let donuts = 24 * 60 * 60 / time;
        donuts = Math.floor(donuts)
        sum += donuts;
        
    }boxes = sum/donutsInBox;
    boxes = Math.ceil(boxes);
    console.log(boxes)
}

