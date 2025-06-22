// let score= 33

// console.log(typeof score);
// console.log(typeof (score));







// let score ="33abc"
// console.log(typeof score);
// console.log(typeof (score));


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);




// This code snippet is teaching you about type conversion (type coercion) in JavaScript — specifically, how a string gets converted into a number using Number() and what the results look like.

// Here’s your code with comments and explanation:

// javascript
// Copy
// Edit
// // let score = 33;  // This part is commented out — if it were used, it would define score as a number.

// // console.log(typeof score);      // Would print: "number"
// // console.log(typeof (score));    // Also prints: "number"


// // Now score is assigned a string that contains numbers + letters
// let score = "33abc"; 

// // Check the type of 'score' variable — it's still a string
// console.log(typeof score);            // Output: string
// console.log(typeof (score));          // Output: string

// // Convert the string to a number using Number()
// let valueInNumber = Number(score);

// // Check the type after conversion
// console.log(typeof valueInNumber);    // Output: number

// // Check the actual value after conversion
// console.log(valueInNumber);           // Output: NaN (Not a Number)
// 🔍 What this code teaches you:
// typeof operator:

// Used to check the type of a variable (like string, number, etc.).

// Type Conversion using Number():

// When you try to convert a string like "33abc" to a number, JavaScript fails to parse it completely and returns NaN.

// Understanding NaN:

// NaN stands for "Not a Number".

// It still has a type of "number" in JavaScript, which is confusing at first but is how the language works.

// ✅ Takeaway:
// Just because something looks like a number, like "33abc", doesn't mean it can be converted into one.

// Always validate inputs before conversion if you expect clean numeric data.

// let score =null
// console.log(typeof score);
// console.log(typeof (score));


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/*null gives 0*/





// let score =undefined
// console.log(typeof score);
// console.log(typeof (score));


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/*undefined gives NaN*/



// let score ="ashutosh"
// console.log(typeof score);
// console.log(typeof (score));


// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);



/*String gives NaN coz it cannot be converted to no 
and and true gives 1 and false gives 0 */



// Final Notes

//"33"=>33
//"33abc"=>NaN(but type of NaN is no only)
//true->1;false->0


// let isLoggedIn =1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


/*converting 1 gives true*/
//""->empty string gives false
//" three" ->value in string gives true

// let someNumber =33

// let stringNumber=String(someNumber)
// console.log(stringNumber);
// console.log(typeof(stringNumber))



//***************** OPERATIONS  ****************

// let value = 3 
// let negValue= -value
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


// let str1="hello"
// let str2=" ashutosh"
// let str3=str1+str2
// console.log(str3);



// console.log(2+2);
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");//jo type phle hoga
// //  waise hi treat hoga final ans
// console.log(3 + 4 * 5 % 3);

console.log(true);
console.log(+true);
console.log(+"");

let num1,num2,num3

num1 = num2 =num3= 2 + 2

let gameCounter =100
gameCounter++;
console.log(gameCounter);































