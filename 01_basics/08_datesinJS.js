//Dates

let myDate=new Date() //my date is both and object and an instance of the data class

// console.log(myDate);//not readable
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,0,23,2,3,45)
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); 


let myTimeStamp = Date.now()
//when designing quiz and poll to make 
// first submission as wineer
// then it is helpful
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//this concept is used in making
// bnb clone

// console.log(Math.floor(Date.now()/1000));
//divided by 1k to convert milliseconds to secondss
// Math.floor is used to remove decimal



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long"
    
})




















