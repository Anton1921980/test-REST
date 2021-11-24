//1 

let d1 = new Date("Jan 01 2016");
let d2 = new Date("Dec 29 2016");

console.log(d1);
console.log(d2);
Date.prototype.daysTo = function (d2) {
    let days = Math.round(Math.abs((this - d2) / (1000 * 60 * 60 * 24)));
    console.log(days);
    return days;
}
d1.daysTo(d2)


//2 

let inputArr = [{
    amount: 1000,
    quantity: 10
}, {
    amount: 2000,
    quantity: 20
}, {
    amount: 3000,
    quantity: 30
}]

let outputArr = JSON.parse(JSON.stringify(inputArr));
for (i in outputArr) {
    let total = outputArr[i].amount * outputArr[i].quantity;
    outputArr[i].Total = total;
}
console.log(inputArr);
console.log(outputArr);



//3

const object = {
    a1: 1,
    a2: null,
    a3: 111,
    a4: {
        a7: { w: 7, q: 8 },
        a8: 8,
        a9: 9
    },
    a5: 50000
}
const prototype = {
    a222: 22222, 
    a3: 12,
    a4: {
        a7: { w: null },
        a8: 8888
    }
}
function projectedObj(object, prototype) {
    let projected = {};
//во входящем объекте нет a222, поэтому undefined
    let objectKeys = Object.keys(object);
    let prototypeKeys = Object.keys(prototype);
    
    let projectedKeysArr = prototypeKeys.includes(objectKeys);
    console.log(projectedKeysArr);

    for (let key in prototype) {
        if (projectedKeysArr.includes(key)) {
            projected[key] = object[key];
        }
    }
    console.log("object", object);
    console.log("prototype", prototype);
    console.log("projected", projected);

    return projected;
}
projectedObj(object, prototype);