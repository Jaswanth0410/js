// console.log("Hello World!");
// console.log(typeof "Jaswanth");
// console.log(typeof 42);
// console.log(typeof true);

// // strings
// const myVariable ="Mathematics";

// // length
// console.log("Happy bIrthday".length);
// methods
// console.log(myVariable.charAt(5));
// console.log(myVariable.indexOf("Ma"));
// console.log(myVariable.slice(5,6));
// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());
// console.log(myVariable.includes('fiv'));
// console.log(myVariable.split(""));

// Number
// const myNumber = 42;
// const myFloat = 42.1;
// console.log(myNumber);
// console.log(myFloat);
// console.log(Number("Jas"));
// console.log(Number(true));
// console.log(Number(false));

// Math
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(3.5));
// power
// console.log(Math.pow(2,5));
// console.log(Math.min(2,0.4,5));
// console.log(Math.floor(Math.random()*10)+1);

// const myName="Jaswanth"
// console.log(typeof(myName));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));

// Soup Order

// let soup="chicken soup";
// let reply;
// if(soup){
//     reply= `Here's your order of ${soup}`;
// }
// else{
//     reply="Sorry,we're out of Soup";
// }
// console.log(reply);

// test Scores

// let testScore = 40;
// let collegeStudent=false;
// let grade;
// if (testScore >=90){
//     grade = "A";
// }else if (testScore >=80){
//     grade = "B";
// }else if (testScore >=70){
//     grade = "C";
// }else if (testScore >=60){
//     grade = "D";
// }else if (testScore >=50){
//     grade = "E";
// }else{
//     if(collegeStudent){
//         grade ="Fail"
//     }
//     else{
//         grade = "U"
//     }
// }
// console.log(grade);

// alert
// alert("Hello World!");
 
// // confirm
// confirm("Ok === True\nCancel=== False");

// User INput
// let myBoolean = confirm("Ok === True\nCancel=== False");
// console.log(myBoolean);

// user Input
// let name = prompt("Please Enter your NAME.");
// // console.log(typeof name);
// console.log(name.length);
// console.log(name.trim().length);
// console.log(name.trim());
// if(name.length){
//     console.log(name);

// }else{
//     console.log("You didnt Enter your name.");

// }

// FirstInteractive GAME
// let playGame = confirm("Shall we play rock,paper,or scissors?");
// if(playGame){
//     let playerChoice = prompt("Please enter rock paper or scissor.");
// if (playerChoice)  {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if( playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
//         let computerChoice = Math.floor(Math.random() *3 +1);
//         let computer = computerChoice === 1? "rock"
//         : computerChoice === 2? "paper"
//         : "scissors";
    
//         let result = playerOne === computer
//         ?"Tie game!"
//         :playerOne === "rock" && computer === "paper"
//         ? `playerOne: ${playerOne}\nComputer : ${computer}\nComputer wins!`
//         :playerOne === "paper" && computer === "scissors"
//         ? `playerOne: ${playerOne}\nComputer : ${computer}\nComputer wins!`
//         :playerOne === "scissors" && computer === "rock"
//         ? `playerOne: ${playerOne}\nComputer : ${computer}\nComputer wins!`
//         :`playerOne: ${playerOne}\nComputer : ${computer}\nComputer wins!\nplayerOne wins!`
//         alert(result);
//             let playAgain = confirm("Play Again?");
//             playAgain ? location.reload() 
//             : alert("OK,Thanks For playing");
//     }
// }else{
//     alert("I guess you changed your mind.Maybe next time.")
// }
// }
// else{
//     alert("OK,maybe next time")
// }

//Loops
// let  myNumber = 0;
// while (myNumber < 50){
//     myNumber += 2;
//     console.log(myNumber);
//     // myNumber = myNumber + 1;
//     // myNumber++;
// }
// do{
//     console.log(myNumber);
//  } while (myNumber < 50);

// let name = "Jaswanth";
//  for(let i = 0; i <=10; i++){
//     console.log(name.charAt(i));
//  }

//  let name = "Jaswanth";
//  let counter  = 0;
//  let myLetter;
//  while(counter <= 3){
//     myLetter = name[counter];
//     console.log(myLetter);
//     if (counter === 1){
//         counter+= 2;
//         continue;
//     }
//     if(myLetter === "n")break;
//     counter++;
//  }
//  console.log(counter);

//functions

//Methods = Build-In Functions!
//  function sum(num1, num2){
//     console.log(num1);
//     console.log(num2);
//     return num1 + num2;
//  }
//  console.log(sum(2));

// function sum(num1, num2){
//    if(num2 === undefined){
//       return num1 + num1;
  
//    }
//    return num1 + num2;
// }
// console.log(sum(5));

// function getUserNameFromEmail(email){
// return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("playerOne@gmai.com"));

// const toProperCase = (name) => {
//    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };

// console.log(toProperCase("jAsWanTh"));

//var,let,const

var x= 1;
let y= 2; 
const z = 3;

// //local scope
// {
//    let y = 4;
//    console.log(x);
// }

// //local scope
// function myFunc(){
//    const z= 5;
// }
// // console.log(y);

//global scope
// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc(){
//    console.log(`function: ${x}`);
//    console.log(`function: ${y}`);
//    console.log(`function: ${z}`);
//    {
//       console.log(`block: ${x}`);
//       console.log(`block: ${y}`);
//       console.log(`block:   ${z}`);
//    }
// }
// myFunc();

//Arrays
// const myArray = [];
// myArray[0] = "Jaswanth";
// myArray[1] = 1000;
// myArray[2] = true;
// console.log(myArray);

// console.log(myArray.length);

// console.log(myArray[myArray,length - 1]);

// console.log(myArray[1]);

// myArray.push("school");

// console.log(myArray);

// const lastitem = myArray.pop();

// console.log(lastitem)

// myArray.unshift(42);

// console.log(myArray);

// const newlength = myArray.unshift(42);
// 0
// console.log(newlength);
 
// const firstitem = myArray.shift();

// console.log(firstitem);
// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray[2]);

// delete myArray[1];
// myArray.splice(1,1,42 );
 
// console.log(myArray);
// console.log(myArray[1]);

//Arrays
// const myArrayA = ["A","B","C"]
// const myArrayB = ["D","E","F"];

// // const newArray = myArray.slice(2,5);
// // myArray.reverse();
// // const newString = myArray.join();

// // const newArray = newString.split(",");

// // console.log(newArray);

// // const newArray = myArrayA.concat(myArrayB);
// const newArray = [...myArrayA,...myArrayB];

// console.log(newArray);

//Example

// const equipShelfA = ["baseball","football","volleyball"];
// const equipShelfB = ["basketball","cricket","tennis"];

// const clothesShelfA = ["tops","t-shirts","jersyes"];
// const clothesShelfB = ["sweat shirts","sweat pants","hoodies"];

// console.log(equipShelfA[1]);
// //or
// console.log(clothesShelfB[0]);

// const equipDept = [equipShelfA,equipShelfB];
// const clothesDept = [clothesShelfA,clothesShelfB];

// console.log(equipDept[0][1]);
// console.log(clothesDept[1][0]); 

// const sportsStore = [equipDept,clothesDept];
// console.log(sportsStore[0][0][1]);
// console.log(sportsStore[1][1][0]);

//Objects
// const myObj = {name: "Jaswanth"};
// const anotherObj = {
//     alive :true,
//     answer : 42,
//     hobbies:["Eat","sleep","watch"],
//     beverages:{
//         morning:"Coffee",
//         an : "Sprite"
//     },
//     action: function(){
//         // return "Hello World"
//         return `Time for ${this.beverages.morning}`;
//     }
// };

// console.log(anotherObj.action());

//Key value pairs in curly braces
// const vehicle = {
//     wheels: 4,
//     engine: function(){
//         return "Vrooom";
//     }
// };
// // const truck  =Object.create(vehicle);
// // truck.doors = 2;
// // console.log(truck);
// // console.log(truck.wheels);//Inheritance
// // console.log(truck.engine());
// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine =function(){
//     return "Whoooooosh";
// }
// console.log(car.engine());
// console.log(car.wheels);

// const tesla = Object.create(car);
// console.log(tesla.wheels);
// console.log(tesla.engine());

// tesla.engine = function(){
//     return "Shhhhh....";

// };
// console.log(tesla.engine());

//Example 2 Band
// const band = {
//     vocals:"SPB Karthik",
//     guitar:"harris DSP",
//     drums:"Thaman"
// };

 
// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band){
//     console.log(`On ${job},its ${band[job]}!`);
// }

//DESTRUCTING OBJECTS
// const {guitar:myVariable,drums:myDrums} = band;
// const {vocals,guitar,bass,drums } =band;
// console.log(guitar);
// console.log(vocals);

// function sings({vocals}){
//     return `${vocals} sings!`
// };
// console.log(sings(band));

//JS Classes
// class Pizza{
//     constructor(pizzaType,pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//         this.toppings = [];
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(pizzaCrust){
//         this.crust = pizzaCrust;
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppings){
//         this.toppings.push(toppings);
//     }
//     bake(){
//         console.log(
//             `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
//             );
//     }
// }
// const myPizza =  new Pizza("peperoni","small");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives")
// console.log(myPizza.getToppings());

//JSON - JavaScript Object Notation
/*
JSON is used to send and receive Data 
JSON is a text format that is competely language independent
*/

// const myObj = {
//     name:"Dave",
//     hobbies:["Eat","sleep","watch"],
//     hello: function(){
//         console.log("Hello!");
//     }
// };
// console.log(myObj);
// console.log(myObj.name);
// myObj.hello();
// console.log(typeof myObj);

// const sendJSON  = JSON.stringify(myObj);
// console.log(sendJSON)
// console.log(typeof(sendJSON))
// console.log(sendJSON.name);

// const receiveJSON = JSON.parse(sendJSON);
// console.log(receiveJSON)
// console.log(typeof(receiveJSON))
