"use strict";
let num1 = 23;
let num2 = 34;
let num3 = 53;
if (num1 < num2) {
    console.log(`${num1} is greater than ${num2} is not true`);
}
else {
    console.log("you are mad!");
}
num1 > num2
    ? console.log("num1 is greater than num2")
    : console.log("num1 is less than num2");
num1 > num3
    ? console.log("num1 is greater than num3")
    : console.log("num1 is less than num3");
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let nums = [10, 20, 30, 40];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
let mixData = ["cosmos", 55, "asg", 555];
let data = { number: 5 };
for (let item of mixData.entries()) {
    console.log(item);
}
Object.keys(data).map((item) => {
    console.log(item);
});
for (let [i, item] of mixData.entries()) {
    console.log(`${i + 1} - ${item}`);
}
let yash = ["Cosmos", 6, 50, "star"];
for (let point in yash) {
    console.log(`${point} - ${yash[point]}`);
}
