
// function sayMyName(){

// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// }

//sayMyName     //without bracket is 
// called function reference

// sayMyName()   //with parenthesis
//  we are executing the function

// function addTwoNumbers(number1,number2){ //parameters are defined
//    console.log (number1+number2);

function addTwoNumbers(number1,number2){
// let result =number1+number2
// return result
return number1+number2
console.log("Hitesh");  //return ke baad kuch bhi 
// execute nhi hota hai
}




// addTwoNumbers(
// addTwoNumbers(3,8)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)   //arguments are passed


const result = addTwoNumbers(3,5)
// console.log("Result: ",result);




function loginUserMessage(username="sam"){
    if(username=== undefined){  //or(!username)
        console.log("Please enter a username");
        return
        }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) /*it will give "undefined" coz
//  it has not been defined*/



  //in shopping cart we do not know how many items 
//   will user add in cart 
//so we do not know how much argument to pass

function calculateCartPrice(...num1){  //...is rest operator her
    //it is called both rest operator and spread operator depending on use case

    return num1

}

// console.log(calculateCartPrice(2))
console.log(calculateCartPrice(200,400,500,2000))
const user = {
    username: "hitesh",
    price:199
}


//how to pass the above object in function

//we can pass in both ways
//by making an anyobject
function handleObject(anyobject){
    console.log(`Username is  ${anyobject.username} and price is ${anyobject.price}`);
}


//and by directly passing the object
handleObject(user)
handleObject({
    username: "Ashu",
    price: 399
})



//pass array 

const mynewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}

console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,400,500,1000]));

    



 

 







