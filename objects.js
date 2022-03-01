const car = {
    color: 'red',
    make: 'Ford',
    model: 'Focus',
    year: '2010'
}

// console.log(car);
// console.log(car.make);

const house = {
    doors: 9
}

// console.log(`Original house: ${house}`);
// console.log('Original house', house);

// house.windows = 17;

// console.log('New house', house);

// house.garden = true;
//  console.log('house with garden');

//can use for loop to iterate through object with bracket notation! Below loop adds 10 keys with value of 'foo':

 const obj = {}

 for (let i = 0; i < 10; i++) {
     obj['key' + i] = 'foo'
 }

 console.log(obj);

// Can use numbers as keys in objects, but not recommended because you can't use dot notation

const obj2 = {
    1: 'one'
}

// below doesn't work, must use bracekt notation instead:
// console.log(obj.1);
console.log(obj2['1']);

//using object properties with conditionals
const obj3 = {
    whatevs: 'hi',
    count: 4
}

if(obj3.whatevs === 'hi') {
    console.log('ok')
}

const obj4 = {
    something: 'wut'
}

// Below conditional evaluates to true if object key exists
if (obj.something) {
    console.log('ok')
}

if (obj.anotherthing) {
    console.log('ok')
} else {
    console.log("This prop don't exist")
}