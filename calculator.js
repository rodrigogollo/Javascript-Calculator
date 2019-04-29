//Get the input value
const currValue = document.querySelector("input");
let ans = false;
const msg = document.querySelector("#message");
//Add any number to the input
const addNumber = (num) => {
    if(currValue.value.length < 20){
        if(currValue.value == "0" || ans){
            currValue.value = num;
            ans = false;
        } 
        else{
            currValue.value += num;
        }
    }
    else{
        msg.textContent = "Number too big!";
    } 
   
}

//Function that turn the input value to zero
const deleteAll = () => {
    currValue.value = "0";
    msg.textContent = "";
}

//Delete the last number added to the input value
const deletePrevious = () => {
    if(currValue.value.length == 1){
        currValue.value = "0";
    } else{
        currValue.value = currValue.value.substring(0, currValue.value.length-1);
    }
    msg.textContent = "";
}
//if theres any symbol already on the input
//first do the calculation provided then with the result add the next symbol to the input

//add percent to input
const addPercent = () => {
    result();
    ans = false;
    currValue.value += "%";
}
//add division to input
const addDivision = () =>{
    result();
    ans = false;
    currValue.value += "/"
}
//add multiplication to input
const addMultiplication = () => {
    result();
    ans = false;
    currValue.value += "*"
}
//add subtraction to input
const addSubtraction = () => {
    result();
    ans = false;
    currValue.value += "-"
}
//add sum to input
const addSum = () => {
    result();
    ans = false;
    currValue.value += "+"
}
//add dot to input
const addDot = () => {
    if(!currValue.value.includes("."))
        currValue.value += "."
}
//fulfill the input with the calculation result
function result(){
    //check if theres already any calculation  symbol in the end of the input
    //if there's replace for the symbol that has called the function
    let conditions = ["+","-","/","*","%"];
    let verification = conditions.some(el => currValue.value[currValue.value.length-1].includes(el));
    if(verification){
        deletePrevious();
    } else{
        //check which calculation must be done and put the result returned on includeSymbol function into the input
        if(currValue.value.includes("+")){
            currValue.value = includeSymbol("+");
        }
        if(currValue.value.includes("-")){
            currValue.value = includeSymbol("-");
        }
        if(currValue.value.includes("/")){
            currValue.value = includeSymbol("/");
        }
        if(currValue.value.includes("*")){
            currValue.value = includeSymbol("*");
        }
        if(currValue.value.includes("%")){
            currValue.value = includeSymbol("%");
        }
    }
    ans = true;
}
//function that receives the calculation symbol, do the calculation and returns the result
const includeSymbol = (sym) => {
    if(currValue.value.includes(sym)){
        let a =  currValue.value.substring(0, currValue.value.indexOf(sym));
        let b = currValue.value.substring(currValue.value.indexOf(sym)+1, currValue.value.length);
        a = parseFloat(a);
        b = parseFloat(b);
        switch (sym){
            case "+":
            return a + b;
            case "-":
            return a - b;
            case "*":
            return a * b;
            case "/":
            return a / b;
            case "%":
            return (a /100) * b;
        }
    }
}
