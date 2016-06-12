// function add(a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// console.log( add(...toAdd) );

// var groupA = ['test', 'user'];
//
// var groupB = ['B1', 'B2'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['George', 23];
var person2 = ['test', 20];

function greet(name,age) {
  console.log( 'Hello ' + name + '. You are ' + age + ' years old' );
}

greet(...person);
greet(...person2);

var names = ['blah', 'test'];
var final = ['george', ...names];

final.forEach( (name) => {
  console.log('hi ' + name);
} );
