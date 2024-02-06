// function declaration

function square(num) {
    return num * num;
};

// function expression 

const square = function (num) {
    return num* num;

}; // this is anonymous function i.e which has no name

// first class functions - functions which can be treated as variables



function display(fn){
    console.log("square is "+ fn(5));
};

display(square);

// IIFE - immediately invoked function expression

(function square(num) {
    console .log(num * num) ;
})(5);

//hoisting

// function are hoisted diferently as the entire function is copied to scope.
//even if we call it before the initialization it'll run

fname();
function fname() {
    console.log("hello");
}

console.log(x);
var x = 7;

// arrow fns and regular fns

function square(num) {
    return num * num;
};

const square = (num) => num* num;



