

//1
let d1;
let d2;
function daysTotal() {
    let input1 = document.getElementById("q1").value;
    let input2 = document.getElementById("q2").value;
    d1 = new Date(input1);
    d2 = new Date(input2);

    console.log(d1);
    console.log(d2);

    Date.prototype.daysTo = function (d2) {
        let days = Math.round(Math.abs((this - d2) / (1000 * 60 * 60 * 24)));
        console.log(days);
        document.getElementById("days").innerHTML = `number of days: ${days}`;
        return days;
    }
    d1.daysTo(d2)
}

//2
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
        output = entry[1]
    };

    console.log(output);

    let x = document.getElementById("arr").value;
    let inputArr = eval(x);

    //deep copy of inputArr
    let outputArr = JSON.parse(JSON.stringify(inputArr));


    for (i in outputArr) {
        let total = outputArr[i].amount * outputArr[i].quantity;
        outputArr[i].Total = total;
    }
    //через map попробовать?

    //sort by
    function sortBy(outputArr, output) {
        outputArr.sort((a, b) => a[output] > b[output] ? 1 : -1);

    }
    sortBy(outputArr, output);

    console.log(inputArr);
    console.log(outputArr);

    let inputS = JSON.stringify(inputArr).replace(/"([^"]+)":/g, '$1:');
    let outputS = JSON.stringify(outputArr).replace(/"([^"]+)":/g, '$1:');

    document.getElementById("inputArr").innerHTML = `<p>input:</p> ${inputS}`;
    document.getElementById("outputArr").innerHTML = `<p>output:</p> ${outputS}`;

    event.preventDefault();
}, false);


//3

let object
//          = {
//     a1: 1,
//     a2: null,
//     a3: 111,
//     a4: {
//         a7: {w: 7, q: 8},
//         a8: 8,
//         a9: 9
//     },
//     a5: 50000
// }
let prototype
//  = {
//     a222: 22222, 
//     a3:12,
//     a4: {
//         a7: {w: null},
//         a8: 8888
//     }
// }
function projectedObj(object = {
    a1: 1,
    a2: null,
    a3: 111,
    a4: {
        a7: { w: 7, q: 8 },
        a8: 8,
        a9: 9
    },
    a5: 50000
}, prototype = {
    a222: 22222,
    a3: 12,
    a4: {
        a7: { w: null },
        a8: 8888
    }
}) {
    let projected = {};

    let objectKeys = Object.keys(object);
    let prototypeKeys = Object.keys(prototype);

    //array of projected keys that not undefined   
    let projectedKeysArr = prototypeKeys.filter((a) => objectKeys.indexOf(a) !== -1);

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
