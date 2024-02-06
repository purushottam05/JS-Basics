// var vs let vs const
// var is functonal scope , let, const are block scope

//variable shadowing

function test() {
    let a = "Hello";
    
    if(true){
        let a = "Hi";
        console.log(a);

    }
    console.log(a);
}

test();

//declaration

// var can be reinitialized but let and const can't
// var and let can be declared without initizalizing but const can't 

//hoisting

// during creation phase the js engine moves var and function declarations to top

console.log(count);
var count = 1;

//temporal dead zone

//where let and const are stored between initialization and execution

function abc(){
    console.log(a,b,c);
    const c =30;
    let b = 20;
    var a = 10;

}

abc();