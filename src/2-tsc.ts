let num1 : number = 23;
let num2 : number = 34;
let num3 : number = 53;

if(num1 < num2){
    console.log(`${num1} is greater than ${num2} is not true`)
}else{
    console.log("you are mad!")
}

//alternate approach for if else condition is ternary operator with more effective approach
num1 > num2
    ? console.log("num1 is greater than num2")
    : console.log("num1 is less than num2")

num1 > num3
    ? console.log("num1 is greater than num3")
    : console.log("num1 is less than num3")


for(let i = 0;i < 10;i++){
    console.log(i);
}

for(let i = 0;i<10;i++){
    console.log(i);
}

let nums : number[] = [10,20,30,40]

for(let i = 0;i<nums.length;i++){
    console.log(nums[i]);
    
}

let mixData : (string | number)[] = ["cosmos",55,"asg",555];

let data : Object = {number : 5};

for(let item of mixData.entries()){
    console.log(item)
}

Object.keys(data).map((item)=>{
    console.log(item);
    
})

// destructure of the array
for(let [i,item] of mixData.entries()){
    console.log(`${i+1} - ${item}`);
    
}

let yash : (string | number)[] = ["Cosmos" , 6,50,"star"];

for(let point in yash){
    // console.log(point); // giving string


    console.log(`${point} - ${yash[point]}`);
    

    

    
} // + 

// + = parseInt()