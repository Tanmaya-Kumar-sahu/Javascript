let val1 = 10
let val2 = 20

function addNum(num1,num2){
    let total = num1+ num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum (10,20)


{/*
 1=>Global Execution   
        |_this
 2=> memory phase
       *val1 --> undefined
       *val2 --> undefined
       *addNum --> function Defination 
       result1 --> undfined
       result2 --> undefined
3=>Execution phase
      - val1 --> 10
      - val2 --> 20
      - addnum --> [
        * here create new variable environment + execution thread 
         //Memory Phase
         val1 --> undefined
         val2 --> undefined
         total --> undefined
         //Execution context
         num1-->10
         num-->20
         total-->15 ---- ite will return to global execution
      ] // after execution it delete
       - result1 -->15
       - result2 -->[
       ----new variable environment + thread
           //memory phase

       ]

       //call stack
           Last in first Out
    */}


    // call stack

    function one(){
        console.log("one");
        
    }
    function two(){
        console.log("two");
        
    }
    function three(){
        console.log("three");
        
    }

    one()
    two()
    three()