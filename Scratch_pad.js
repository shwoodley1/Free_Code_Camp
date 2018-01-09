function repeatStringNumTimes(str, num) {
 if (num < 0) return "";
  return str.repeat(num);
}

repeatStringNumTimes("*", 9);


function confirmEnding(str, target) {

  str = str.substr(-target.length);
 num = (str === target);
 console.log(num);
}
confirmEnding("Bastian", "tian");


function largestOfFour(arr) {
   for(var i = 0; i < arr.length; i++){
 arr[i] = arr[i].sort(function(a,b){return b - a;}).shift(0);
}
   return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function titleCase(str) {
var words = str.toLowerCase().split(' ');
 for (var i = 0; i < words.length; i++){
     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
 }
console.log(words.join(' '));
}
titleCase("I'm a little tea pot");


findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str){
  document.write(str.split(' ').sort(function (a,b){return b.length - a.length})[0].length); 


 function palindrome(str){
    shane = str.toLowerCase().replace(/[^A-Za-z0-9_]/g,"");
     answer = (shane === shane.split('').reverse().join(''))
 console.log(answer);
 }
 palindrome('race@CaR');
