//Primitive

// types: String,Number,Boolean,null,undefined,Symbol,
// BigInt

// const score=100
// const scoreValue =100.3

// const isLoggedIn =false
// const outsideTemp = null
// let userEmail;

// const id =Symbol('123')
// const anotherId = Symbol('123')
// console.log(id ===anotherId);


// const bigNumber = 2384229428952n

//Array,objects ,functions

// const heros =["shaktimaan","naagraj","doga"];
// let myObj={
//     name:"ashutosh",
//     age:22,

// }

// const myFunction =function(){
//     console.log("Hello world");
    
// }

// console.log(typeof myFunction);
// /*object function returns function*/(function object)


// console.log(typeof bigNumber); 
// console.log(typeof outsideTemp); 
// console.log(typeof scoreValue);
// console.log(typeof heros);


//++++++++++++++++++++++++++++++++++++++++++

//Stack(used in all primitive types ),
// Heap(used in all non-primitive types)


// let myYoutubename="hiteshchoudharydotcom"

// console.log(myYoutubename);
// console.log(anothername);


let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}
let userTwo= userOne

userTwo.email="ashutosh@google.com"
console.log(userOne.email);
console.log(userTwo.email);

