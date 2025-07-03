//global scope


// let a=10
// const b=20
// var c=300;

//{} //called as scope

//block scope

//global scope things are accessible in block scope but
//vice-cersa is not tue
let a=300
if(true){
    let a=10
    const b=20
    var c=30
    // console.log("INNER:",a);
    
}
//block scope ends


/*imp for interview*/
//going in inspect->console and checking foe core scope is different
//and in code environment(like vs code) when we run example through node (that scope is different)

// console.log(a);
// console.log(b);  //(will give wrong output coz b scope ends there only in brackets)
// console.log(c);


/*Nested scope*/

//chota bcha bde se ice-cream maang skta h
//but vice versa is not true

//here function two is chota so it can
// access all the variables defined in function one


// function one() {
//     const username="hitesh"

//     function two(){
//         const website="youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
//     two()
    
// }

// one()

if(true){
    const username="hitesh"

    if(username==="hitesh"){
        const website=" youtube"
        // console.log(username+website);
        
        
    }
    // console.log(website); //will throw error coz 
    //it is out of scope
    

}

// console.log(username);  //will throw error coz 
    //it is out of scope



    //++++++++++++++++++++++++++++++++++ interesting+++++++++++++++++++++++++++++




    // two techniques to make a function

    // variables are strong is js ,it can store anything
    // like array,json,function etc



    
       console.log(addone(5))

    function addone(num){
        return num+1

    }

   

    //in these kind of function declaration we cannot access the function
    // before declaration
       addTwo(5)  ///so it will throw error

    const addTwo =function(num){
        return num + 2
    }

 







