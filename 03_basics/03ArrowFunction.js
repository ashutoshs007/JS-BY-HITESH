const user ={
    username:"hitesh",
    price:999,

    welcomeMessage : function(){
        // console.log(`${username}` welcome to website);// only this won't work ,use
        //  this.username for refering 
        // current context(eg;accessing all these variables in this scope)
        console.log(`${this.username} welcome to website`);
        console.log(this);//talks about current context
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username);//this will give you undefined
//     //it means that this context is only wirking in objects not in functions like this
// }

// chai()



// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }




// remove parenthesis and put arrow 
// to make it arrow function
const chai = ()=>{
    let username = "hitesh"
    console.log(this);
    
}

// chai()


//()=> {}//arrow function

/*agr curly brackets me wrap kra toh
return keyword likhna pdega wrna parenthesis me 
nhi likhna pdega*/
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))



//another way to use arrow function(called as implicit return )


// const addTwo = (num1,num2) => num1 + num2


/*agr curly brackets me wrap kra toh
return keyword likhna pdega wrna parenthesis me 
nhi likhna pdega*/

/*used mostly in react
const addTwo = (num1,num2) => (num1 + num2)

/*without parenthesis you cannot return object*/
const addTwo = (num1,num2) => ({username:"hitesh"})

//  console.log(addTwo(3,4))



//use of arrow function in loops

const myArray =[2,5,3,8,9]
myArray.forEach(()=> {})












