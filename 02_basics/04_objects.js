/* Object sigelton or how we can decalre object with 
the help of constructor */

// const tinderUser = new Object() //(THIS IS SINGELTON OBJECT)
const tinderUser = {}  // THIS IS NON-SINGELTON OBJECT

// console.log(tinderUser);
//BOTH GIVES SAME output

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

//Objects within objects
const regularUser={
    email: "some@gmail.com",
    fullname: { 
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a", 6:"b"}

// const obj3 ={obj1,obj2}
/*one way to merge objects*/

// const obj3=Object.assign({},obj1,obj2,obj4)
/*another way to merge objects*/
// console.log(obj3);

//{} is the target obj where all later(source) objects will get merged
//for more infor check object merge mdn documentation in js 

const obj3={...obj1,...obj2}
/*third way to merge objects is using spread operator*/
// console.log(obj3);



/*jb database se value aayegi then use this syntax*/
// (array of objects)
const users= [
    {
        id:1,
        email: "h@gmail.com"
    },
     {
        id:2,
        email: "ha@gmail.com"
    }
     
    
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
/*this will give keys in array datatype*/
// now run loop in these or use wherever you want ,too important for upcoming projects or work in database


// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));









/*Object destructuring and JSON API*/


const course ={
coursename: "js in hindi",
price:"999",
courseInstructor:"hitesh"
}

// course.courseInstructor

const{courseInstructor}=course
console.log(courseInstructor);




const{courseInstructor:teacher}=course
console.log(teacher);





















