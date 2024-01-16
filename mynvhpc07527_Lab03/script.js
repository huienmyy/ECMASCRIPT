/** Arrow function
 * Bài 1: 
 */
const multiply = (num1, num2) => num1 * num2;
const toCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);
const padZeros = (num, totallen) => {
  let numStr = num.toString();
  let numZeros = totallen - numStr.length;

  for (let i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
};
const power = (base, exponent) => {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
};
const greet = (who) => console.log("Hello" + who);

/**
 * Bài 2
 */
let arr = [1, 2, 3, 4, 5, 6, 7];
let sumArr = 0;
for (const element of arr) {
  sumArr += element;
}
console.log(sumArr);

/**
 * Bài 3
 */
let Entity = function (name, delay) {
  this.name = name;
  this.delay = delay;
};
const Entityarrow = (name, delay) => ({ name, delay });
console.log(Entityarrow("Huyền My", 1));

Entity.prototype.greet = function () {
  setTimeout(
    function () {
      console.log("Xin chào, tên tôi là ", this.name);
    }.bind(this),
    this.delay
  );
};
let java = new Entity("Java", 5000);
let cpp = new Entity("C++", 30);
java.greet();
cpp.greet();

/**
 * Bài 4
 */
const convertTemperature = (temperature, unit) =>
  unit === "C" ? (temperature * 9) / 5 + 32 : (temperature - 32) * (5 / 9);

// Ví dụ
const Celsius = 30;
const Fahrenheit = 60;

console.log(`${Celsius}C là ${convertTemperature(Celsius, "C")}F`);
console.log(`${Fahrenheit}F là ${convertTemperature(Fahrenheit, "F")}C`);
