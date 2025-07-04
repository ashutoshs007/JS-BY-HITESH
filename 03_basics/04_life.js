//Immediately Invoked Function Expressions(IIFE)

/*TO ESCAPE POLLUTION OF A PARTICULAR 
  FUNCTION DUE TO GLOBAL SCOPE,WE WRITE IIFE*/



   //named IIFE
(function chai(){
    console.log('DB CONNECTED');
})();

// (FUNCTION DEFINITION)(EXECUTION CALL)

(()=>{
    console.log('DB CONNECTED TWO');
})();



//Simple IIFE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('ashutosh')




