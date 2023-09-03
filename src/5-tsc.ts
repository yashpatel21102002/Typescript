
function multiplication(num1: number, num2: number):number{
    return num1*num2
}

const ans = multiplication(5,6);
console.log(ans);


// void type
function printMe(){
    console.log("Hello");
    
}
printMe();

let productCategory :string;
let shoppingCart =   (category:string):string=>{
    return productCategory = category;
}

// console.log(shoppingCart("pants"));
shoppingCart.call(this,"tshirts");
shoppingCart("hello")

let moviename : void = undefined;


// never type
function chatFeed():never{
    while(true){

    }
}

chatFeed();
// console.log("chat disconnected")

