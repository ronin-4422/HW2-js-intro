console.log('------------- # 4');
let a = 2;
let b = 2;
let minus = a - b;
console.log(minus);
let plus = a + b;
console.log(plus);
let multiply = a * b;
console.log(multiply);
let split = a / b;
console.log(split);

console.log('------------- # 5');
for (let a = 1; a <= 5; a++) 
console.log(a);

console.log('------------- # 6');
for (let b = 5; b >= 1; b--) 
console.log(b);

console.log('------------- # 7');
function getMarkInfo(condition) {
  if (condition === 10) {
    console.log('У вас максимальный балл');
  } else if (condition < 10) {
    console.log('У вас средний балл');
  }
}
getMarkInfo(10);
getMarkInfo(1);

console.log('------------- # 8');
function getDayInfo(position) {
  switch (position) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednsday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Wrong data');
      break;
  }
}
getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);
getDayInfo(7);

console.log('------------- # 9');
const bar = ['a', 'b', 'c'];
bar.push(1, 2, 3);
console.log(bar);

console.log('------------- # 10');
const n = [1, 2, 3];
const m = [4, 5, 6];
const c = n.concat(m);
console.log(c);

console.log('------------- # 11');

function mathProg () {
  for (let a = 1; a <= 5; a++) 
console.log(a);
}