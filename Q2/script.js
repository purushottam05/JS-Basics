// map, filter, reduce

//map()

const nums = [1,2,3,4];

const multiplyThree = nums.map((num, i, arr) => {
    return num*3;
});

console.log(multiplyThree);

//filter()

const nums = [1,2,3,4];

const greaterThanTwo = nums.filter((num, i, arr) => {
    return num>2;
});

console.log(greaterThanTwo);

//reduce()

const nums = [1,2,3,4];

const sum = nums.reduce((acc, cur ,i, arr) => {
    return acc+cur;
}, 0);

console.log(sum);

//polyfill for map()

Array.protoype.myMap = function (cb) {
    let temp= [];
    for (let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;
};

//polyfill for filter()

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for( let i=0; i< this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

//polyfill for reduce()

Array.prototype.myReduce = function (cb, initialValue){
    var accumulator = initialValue;
    for(let i=0; i<this.length; i++){
        accumulator = accumulator?cb(accumulator, this[i], i, this): this[i];
    }
    return accumulator;

};

// map vs foreach - map creates another array consisting changes of values in the arr according to condition
// foreach changes the value of arr itself