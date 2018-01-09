 function palindrome(str){
    shane = str.toLowerCase().replace(/[^A-Za-z0-9_]/g,"");
     answer = (shane === shane.split('').reverse().join(''))
 console.log(answer);
 }
 palindrome('race@CaR');
