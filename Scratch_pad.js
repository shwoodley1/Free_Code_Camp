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
