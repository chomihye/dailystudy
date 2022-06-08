const amIFat = null;
console.log(amIFat);

//null = 아무것도 없음 (nothing) ,define
//undefined  = 정의되지 않음

function sayHello(nameofPerson, age) {
  console.log(nameofPerson, age);
}

sayHello('kado', 4);

function plus(a, b) {
  console.log(a + b);
}

plus(2, 63);

function divide(a, b) {
  console.log(a / b);
}

divide(364, 5);

const player = {
  name: 'kado',
  sayHello: function (otherPersonName) {
    console.log('hello ' + otherPersonName);
  },
};

console.log(player.name);
player.sayHello('mimi');

const age = 96;
function calculatekrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculatekrAge(age);
console.log(krAge);

// ---------------
const age = prompt('how old r u?');

// typeof 타입을 알 수 있음
// parseInt 숫자로 변환
console.log(typeof '15', typeof parseInt('15'));

console.log(age, parseInt(age));

const age = parseInt(promt('how old r u?'));
if (isNaN(age)) {
  console.log('please write a number');
} else if (age < 18) {
  console.log('you are too young');
} else {
  console.log('you can drink');
}

true || true === true;
false || true === true;
true || false === true;
false || false === false;

true && true === true;
true && false === false;
false && true === false;
false && false === false;

const age = parseInt(prompt('how old r u?'));

if (isNaN(age) || age < 0) {
  console.log('please write a number');
} else if (age < 18) {
  console.log('you are too young');
} else if (age >= 18 && age <= 50) {
  console.log('you can drink');
} else if (age > 50 && age <= 80) {
  console.log('you should exercise');
} else {
  console.log("you can't drink");
}
