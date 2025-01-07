//Numbers

let variable="rashmika";
const num=34;
const num1=34.5;

console.log(num===num1);


let variable1="34";
console.log(typeof(variable1));
console.log(Number(variable1));
console.log(Number(1)+6);

//Number methods

//isInteger

console.log(Number.isInteger(443));
console.log(Number.isInteger(545.5));

console.log(Number.parseFloat(435.6));
console.log(Number.parseFloat("435.6sds"));

console.log(Number.parseInt(435.6));
console.log(Number.parseInt("435.6sds"));

console.log(Number.parseFloat("435.644fsfssds").toFixed(2));

console.log(num.toString());

//chaining

console.log(parseFloat(4355.66).toFixed(3).toString());


console.log(Number.isNaN(42));//checks if number and then for isNaN
console.log(Number.isNaN('Rashmika'));
console.log(Number.isNaN('42'));