//array

const myArr=[0,1,2,3,4,5,true,"ashutosh"]

const myHeroes =["shaktiman","nagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)  //push 9 to the start
// myArr.shift()    // remove first element

// console.log(myArr.includes(9));

// const newArr = myArr.join()//changes array to string separated by a separator

// console.log(myArr);
// console.log(newArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice


//SPLICE manipulates original array while slice doesn't

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)


console.log("C",myArr);
console.log(myn2);
 










