"use strict";
const fun_holiday = function (product, sales, tax, discount) {
    let totalSalesForIndividual = product[1] * sales;
    totalSalesForIndividual -= ((tax + discount) * totalSalesForIndividual) / 100;
    return totalSalesForIndividual;
};
const sunglasses = fun_holiday(["sunglasses", 50], 10, 50, 10);
console.log(sunglasses);
