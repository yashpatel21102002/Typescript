// functions declarations
// function holidaySales(
//   product: [string,number],
//   sales: number,
//   tax: number,
//   discount: number
// ) {
//     let totalSalesForIndividual : number = product[1]*sales;

//     totalSalesForIndividual -= ((tax+discount)*totalSalesForIndividual)/100;

//     return totalSalesForIndividual;


  
// }

// const sunglasses : number = holidaySales(["sunglasses" , 50],10,50,10);

// console.log(sunglasses);


//second method

const fun_holiday = function(
  product: [string,number],
  sales: number,
  tax: number,
  discount: number
) {
    let totalSalesForIndividual : number = product[1]*sales;

    totalSalesForIndividual -= ((tax+discount)*totalSalesForIndividual)/100;

    return totalSalesForIndividual;


  
}

const sunglasses : number = fun_holiday(["sunglasses" , 50],10,50,10);

console.log(sunglasses);


// we can use also arrow function likewise we have used this...


