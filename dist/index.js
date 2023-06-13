"use strict";
//basic types 
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./src/circle");
//BOOLEAN
var isDone = true;
console.log(isDone);
//Any type super type of all data types
let isCheck = true;
isCheck = '0';
console.log(isCheck);
// Variables
let fruit = 'Apple';
fruit = 'new type';
let sample;
sample = 'HELp ';
console.log(typeof fruit);
//Arrays
const list = [1, 2, 3];
console.log(list);
let fruits;
fruits = ['apple', 'orange', 'orange'];
//Tuples
let x;
x = [0, ''];
console.log(x);
//Enum
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_PRODUCTS"] = "[GET PRODUCTS] LOADED";
    ActionTypes["CREATE_PRODUCT"] = "[CREATE PRODUCT] CREATE";
})(ActionTypes || (ActionTypes = {}));
const action = {
    payload: 1,
    type: ActionTypes.CREATE_PRODUCT
};
console.log(action);
//Unknown
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
//Void
function test() {
    console.log('Hola mundo');
}
test();
//undefined 
let value = undefined;
value = 5;
let result = null;
result = { id: 1, name: 'Ali' };
console.log(value, result);
//never is something that does not return anything 
function error(message) {
    throw new Error(message);
}
//error('SOMETHING WRONG BAD');
//object
let employee = { id: 0, name: 'Ali' };
employee = { id: 1, name: 'Al2' };
console.log(employee);
//Functions definitions
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function addNumbers(...nums) {
    return nums;
}
console.log(addNumbers(1, 2, 3));
//anonymous function
const addPerson = function (name, age = 10) {
    console.log('adding person', name, age);
};
const addPersons = (persons) => console.log('Hello worl' + persons.map(e => e));
addPerson('Luis');
addPersons(['luis', 'ramon']);
var person1 = {
    name: 'Luis',
    age: 18,
    email: 'luis@gmail.com',
    password: '1235',
    sayHello: (greet) => { return greet; }
};
console.log(person1.sayHello('hello world!!!'));
const command1 = {
    program: 'LEARN',
    commandLine: () => 'Hola FROM THE COMMAND LINE'
};
const fun = command1.commandLine;
console.log(command1);
const ali = {
    name: 'Aladdin',
    age: 18,
    email: 'aladdin@gmail.com',
    password: 'aladdin',
    sayHello: (greet) => `Holaaa ${greet}`,
    instrument: 'guitar'
};
console.log(ali);
console.log(ali.sayHello('aladin'));
//classes
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    disp() {
        return 'The engine o fthe car is' + this.engine;
    }
}
const lambo = new Car('lambo');
console.log(lambo);
console.log(lambo.disp());
//inheritance
const circle = new circle_1.Circle(12);
console.log("suma", circle.sum(2, 3));
circle.disp();
console.log(circle_1.Circle.value);
//generics
function identity(args) {
    return args;
}
console.log(identity('HelloWorl'));
console.log(identity(false));
console.log(identity({ id: 1, title: 'hola' }));
const ob2 = {
    greet: (msg) => `Hola ${msg}`
};
console.log(ob2.greet('Robert'));
class Animal2 {
}
const newAnimal2 = new Animal2();
newAnimal2.breed = 'CAT';
newAnimal2.getBreed = () => newAnimal2.breed;
console.log(newAnimal2.getBreed());
function logginIdentity(arg) {
    console.log(arg.length);
    return arg;
}
const prueba = {
    length: 100
};
const value15 = logginIdentity(prueba);
console.log(value15);
//decorator
// function log(target, key, descriptor){
//     console.log(`${key} was called`)
// }
// class Calculator2{
//     @log
//     square(n:number){
//         return n*n;
//     }
// }
