//Exercise 1
//Prints both variables since the inner function has access to the outer functions variables

//Exercise 2
function mainFunction() {
    hoistMe();
    function hoistMe() {
        console.log("I'm Hoisted!");
    }
}

mainFunction();

//Exercise 3
function outerFunction() {
    let outer1 = 10;
    return function innerFunction() {
        let inner1 = 12;
        console.log(inner1);
        console.log(outer1);
    };
}
const outerCall = outerFunction();
outerCall();

//Exercise 4
let globalBoi = "Glow";
console.log(globalBoi);
function changeGlobalBoi() {
    globalBoi = "Changed Glow";
    console.log(globalBoi);
}
function localBoi() {
    globalBoi = "Local";
    console.log(globalBoi);
}
changeGlobalBoi();
localBoi();

//Exercise 5
function functionFactory(param) {
    return function() {
        console.log(param);
    }
}
const testParam = functionFactory(5);
testParam();

//Exercise 6
function hoistingTest() {
    //console.log(early);

    let early = "Woah!";
}

hoistingTest();

//Exercise 7
function setupCounter() {
    let myCount = 1;

    return function() {
        console.log(++myCount);
    }
}

const countUp = setupCounter();
countUp();

//Exercise 8
function startCount(x) {
    let count = x;
    return function() {
        if(count >=9) {
            count = 0
        } else {
            console.log(++count);
        }
    }
}
const baseCount = startCount(9);
const baseCount2 = startCount(7);
baseCount();
baseCount2();

//Exercise 9
let outerBoi = "outer";
function globalModify() {
    return function() {
        outerBoi = "Modified";
        console.log(outerBoi);
    }
}
const modifyGlobal = globalModify();
modifyGlobal();

function modifyLocal() {
    innerBoi = "Modified inner";
    let innerBoi = "inner";
    console.log(innerBoi);
}