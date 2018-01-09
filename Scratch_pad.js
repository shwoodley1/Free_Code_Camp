findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str){
  document.write(str.split(' ').sort(function (a,b){return b.length - a.length})[0].length); 


 function palindrome(str){
    shane = str.toLowerCase().replace(/[^A-Za-z0-9_]/g,"");
     answer = (shane === shane.split('').reverse().join(''))
 console.log(answer);
 }
 palindrome('race@CaR');
