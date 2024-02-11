
function sumDigit(num1,num2) {
    return result = num1 + num2; 
    
}
function multiDigit(num1,num2 ) {
     
    return result = num1 *num2;
}

function subsDigit(num1,num2) {

    return result = num1 - num2; 
    
}

function divDigit(num1,num2) {
    if(num2 == 0 ){
        return 'cant divide on 0 ';
    }else {

         return result = num1 / num2; 
    }
   
    
}
let num1 = 5; num2 = 3;
resultSum = sumDigit(num1,num2);
resultMult = multiDigit(num1,num2 ) ;
resultSub = subsDigit(num1,num2);
resultDiv = divDigit(num1,num2);
 console.log(`sum of two numbers : ${resultSum}`);
 console.log(`mult of two numbers : ${resultMult}`);
 console.log(`sub of two numbers : ${resultSub}`);
 console.log(`div of two numbers : ${resultDiv}`);


