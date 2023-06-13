//basic types 

import { Circle } from "./src/circle";

//BOOLEAN
var isDone:boolean = true;
console.log(isDone)

//Any type super type of all data types
let isCheck:any = true;
isCheck  = '0';
console.log(isCheck)

// Variables

let fruit:string = 'Apple';
fruit = 'new type';
let sample:string;

sample = 'HELp '

console.log(typeof fruit)

//Arrays

const list:number[]= [1, 2, 3];
console.log(list)

let fruits:string[];
fruits=['apple', 'orange', 'orange'];
//Tuples
let x: [number, string];
x=[0, ''];

console.log(x)
//Enum
enum ActionTypes{
    GET_PRODUCTS = '[GET PRODUCTS] LOADED' ,
    CREATE_PRODUCT = '[CREATE PRODUCT] CREATE' ,
}
const action = {
    payload: 1,
    type: ActionTypes.CREATE_PRODUCT
}

console.log(action)

//Unknown
let notSure: unknown = 4;
notSure= "maybe a string instead";

notSure = false

console.log(notSure)

//Void

function test():void{
    console.log('Hola mundo')
}
test();

//undefined 

let value=undefined;
value=5;

let result = null;
result = {id:1, name:'Ali'};
console.log(value, result)

//never is something that does not return anything 

function error(message:string):never{
    throw new Error(message)

}
//error('SOMETHING WRONG BAD');
//object
let employee: object = {id:0, name:'Ali'};

employee ={id:1, name:'Al2'};

console.log(employee)

//Functions definitions

function add(a:number, b:number):number{
    return a + b;
}
console.log(add(1, 2))

function addNumbers(...nums:number[]):number[]{
    return nums;
}

console.log(addNumbers(1, 2, 3))


//anonymous function

const addPerson=  function(name:string, age:number = 10):void{
    console.log('adding person', name, age)
}

const addPersons=(persons:string[]):void=> console.log('Hello worl'+persons.map(e=>e));
addPerson('Luis')
addPersons(['luis', 'ramon']);


//Interfaces

//classes or objects
interface Person{
    name:string;
    age:number;
    email:string;
    password:string;
    active?:boolean;
    sayHello(greet:string):string;
}

var person1: Person={
    name: 'Luis', 
    age:18, 
    email: 'luis@gmail.com', 
    password: '1235',
    sayHello:(greet:string)=>{return greet} 
};

console.log(person1.sayHello('hello world!!!'));


interface runOptions{
    program: string;
    commandLine: string[] | string | (()=>string)
}

const command1: runOptions={
    program:'LEARN',
    commandLine:()=>'Hola FROM THE COMMAND LINE'
    
}
const fun: any = command1.commandLine;
console.log(command1)

interface Musician extends Person {
    instrument:string
}

const ali: Musician={
    name: 'Aladdin',
    age:18, 
    
    email: 'aladdin@gmail.com',
    password: 'aladdin',
    sayHello:(greet:string)=>`Holaaa ${greet}`,
    instrument: 'guitar'
}


console.log(ali)
console.log(ali.sayHello('aladin'))



//classes

class Car{
    //fields
    engine:string;
    
    constructor(engine:string){
        this.engine=engine;
    }

    disp():string{
        return 'The engine o fthe car is'+this.engine;
    }

}

const lambo = new Car('lambo');
console.log(lambo)
console.log(lambo.disp());

//inheritance






const circle = new Circle(12)

console.log("suma", circle.sum(2, 3))
circle.disp();
console.log(Circle.value)

//generics

function identity<T>(args:T): T{
    return args;
}

console.log(identity<string>('HelloWorl'))
console.log(identity<boolean>(false))

//T vs any es un ejemplo de que podemos seguir utilizando any pero demostrando que tipo de dato queremos utilizar enb nuestrop 
//caso boolean o string


interface Type{
    id:number;
    title:string;
}

console.log(identity<Type>({id:1, title:'hola'}))
//Generic interfaces

interface GenericIdentity<T>{
    greet(msg:T): T
}

const ob2 : GenericIdentity<string>= {
    greet: (msg:string)=>`Hola ${msg}`
}

console.log(ob2.greet('Robert'))

class Animal2<T>{
    breed:T;

    
    getBreed: ()=>T;
    
}

const newAnimal2 = new Animal2<string>();
newAnimal2.breed = 'CAT';
newAnimal2.getBreed=()=>newAnimal2.breed;

console.log(newAnimal2.getBreed())


interface Lengthwise{
    length:number;
}

function logginIdentity<T extends Lengthwise>(arg:T):T{
    console.log(arg.length)
    return arg;
}

const prueba: Lengthwise={
    length:100
}
const value15=logginIdentity<Lengthwise>(prueba)

console.log(value15)

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