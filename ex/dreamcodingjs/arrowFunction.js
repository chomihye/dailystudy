//function

//1.function declaration
// function name(param1, param2) {body...return;}
//one function === one thing

function printHello() {
  console.log("hello");
}
printHello();

//2.parameters
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

//3.default parameters (add in es6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

//4.Rest parameters(add in es6) 배열형태로 전달됨
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg); //배열간단하게 출력
  }
}
printAll("dream", "coding", "ellie");

//5.local scope
let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
}
printMessage();
console.log(message);

//6.Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//7.Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //~
  }
}
//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
}
//--------------
//1.function express
console.log = function () {
  //anonymous function 익명함수
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2.Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const prinYes = function () {
  console.log("yes");
};

const printNo = function print() {
  console.log("no");
};
randomQuiz("wrong", prinYes, printNo);
randomQuiz("love you", prinYes, printNo);

//arrow function
const simplePrint = function () {
  console.log("simplePrint");
};

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;

const add = function (a, b) {
  return a + b;
};

//IIFE : immediately invoked function Expression
(function hello() {
  console.log("IIFE");
})(); //함수 바로 호출
