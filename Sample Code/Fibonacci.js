//this routine is used to calculate a fibonacci number which will be provided by the user
//function to calculate the fibonacci number
function fibo(num){

    //if the number is 0 or 1, return the number
    if(num == 0 || num == 1){
        return num;
    }
    //else return the sum of the previous two numbers
    else{
        return fibo(num - 1) + fibo(num - 2);
    }
    
}


//function to provide the input and output via the console
console.log (fibo(8))


