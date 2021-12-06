/*
const myCar = {};

myCar.make = 'Ford';

myCar.model = 'Mustang';

myCar.year = 1969;

console.log(myCar)
*/

/*
const myCar = {
make: 'Ford',
model: 'Mustang',
year: 1969
};

console.log(myCar);
*/

function myFunc(theObject){
    theObject.make = 'Toyota';

}

var mycar = {make: 'Honda', model:'Accord', year: 1998};
var x,y;
x = mycar.make;
console.log(x);

myFunc(mycar);
y = mycar.make;
console.log(y);