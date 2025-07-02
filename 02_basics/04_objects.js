// /* Object sigelton or how we can decalre object with 
// the help of constructor */

// // const tinderUser = new Object() //(THIS IS SINGELTON OBJECT)
// const tinderUser = {}  // THIS IS NON-SINGELTON OBJECT

// // console.log(tinderUser);
// //BOTH GIVES SAME output

// tinderUser.id = "123abc"
// tinderUser.name ="Sammy"
// tinderUser.isLoggedIn=false

// // console.log(tinderUser);

// //Objects within objects
// const regularUser={
//     email: "some@gmail.com",
//     fullname: { 
//         userfullname:{
//             firstname:"hitesh",
//             lastname:"choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname);
// // console.log(regularUser.fullname.userfullname);

// const obj1={1:"a", 2:"b"}
// const obj2={3:"a", 4:"b"}
// const obj4={5:"a", 6:"b"}

// // const obj3 ={obj1,obj2}
// /*one way to merge objects*/

// // const obj3=Object.assign({},obj1,obj2,obj4)
// /*another way to merge objects*/
// // console.log(obj3);

// //{} is the target obj where all later(source) objects will get merged
// //for more infor check object merge mdn documentation in js 

// const obj3={...obj1,...obj2}
// /*third way to merge objects is using spread operator*/
// // console.log(obj3);



// /*jb database se value aayegi then use this syntax*/
// // (array of objects)
// const users= [
//     {
//         id:1,
//         email: "h@gmail.com"
//     },
//      {
//         id:2,
//         email: "ha@gmail.com"
//     }
     
    
// ]

// users[1].email
// console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// /*this will give keys in array datatype*/
// // now run loop in these or use wherever you want ,too important for upcoming projects or work in database


// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));


// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));









// /*Object destructuring and JSON API*/


// const course ={
// coursename: "js in hindi",
// price:"999",
// courseInstructor:"hitesh"
// }

// // course.courseInstructor

// const{courseInstructor}=course
// console.log(courseInstructor);




// const{courseInstructor:teacher}=course
// console.log(teacher);//DESTRUCTURING THE OBJECT

// /*
// //Some methods in react
// // const navbar = (props.company)=> {
// const navbar = ({company})=> { //destructuring


// } 
// navbar(company = "hitesh")
// */



// /*API*/

// //sometimes we get api in object format

// /* keys and values both are string in json 
//  boolean values and no do not come in ""*/
//  {
//     "name":"hitesh",
//    "coursename": "js in hindi",
//     "price": "free"

//  }




//  //sometimes we get api in array format


//  /*objects in array */

//  //json format
//  [
//     {},
//     {},
    
//  ]




// 🔸 Object Singleton vs Non-Singleton

// const tinderUser = new Object(); // Singleton object (rarely used directly)
const tinderUser = {}; // Non-Singleton object (commonly used)

// Adding properties to the object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// 🔸 Nested Objects
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary"
    }
  }
};

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

// 🔸 Merging Objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// 1. Using Object.assign()
const merged1 = Object.assign({}, obj1, obj2, obj4);

// 2. Using spread operator
const merged2 = { ...obj1, ...obj2, ...obj4 };

console.log(merged1);
console.log(merged2);

// 🔸 Array of Objects (from DB/API)
const users = [
  {
    id: 1,
    email: "h@gmail.com"
  },
  {
    id: 2,
    email: "ha@gmail.com"
  }
];

console.log(users[1].email);

// 🔸 Object Utility Methods
console.log(Object.keys(tinderUser));     // ➝ ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser));   // ➝ ['123abc', 'Sammy', false]
console.log(Object.entries(tinderUser));  // ➝ [['id','123abc'], ['name','Sammy'], ['isLoggedIn',false]]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ➝ true

// 🔸 Object Destructuring
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
};

const { courseInstructor } = course;
console.log(courseInstructor); // ➝ hitesh

const { courseInstructor: teacher } = course;
console.log(teacher); // ➝ hitesh

// 🔸 Destructuring in React-style function
const navbar = ({ company }) => {
  console.log(`Company: ${company}`);
};

navbar({ company: "hitesh" }); // Correct way to call it

// 🔸 JSON Format Examples

// ✅ JSON Object format (commonly received from APIs)
/*
{
  "name": "hitesh",
  "coursename": "js in hindi",
  "price": "free"
}
*/

// ✅ JSON Array of Objects format
/*
[
  {
    "name": "user1",
    "email": "user1@example.com"
  },
  {
    "name": "user2",
    "email": "user2@example.com"
  }
]
*/


























