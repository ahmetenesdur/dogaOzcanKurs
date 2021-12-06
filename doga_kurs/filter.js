/* 
let arr = [1,2,3,4,5];
let arr2 = [];

arr2 = arr.filter(x => x > 3);
console.log(arr2); 
*/


/* 
1 => 1 > 3 => false arreye filter etme
4 => 4 > 3 => true arreye filter et arr.push(4) => arr2 = [4]
*/


/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let arr3 = [];

arr3 = words.filter(x => x.length > 5);
console.log(arr3); 
*/


let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let arr2 = [];

let even = arr.filter(x => x%2 == 0);

console.log(even);


let filtered = [12,5,8,130,44];

function greaterThanten (value) {
    return value > 10
}

let a = filtered.filter(greaterThanten)

console.log(a);