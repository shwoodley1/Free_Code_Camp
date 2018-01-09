function num(){
    
}

function sumAll(arr) {
 
  var highNum = Math.max(arr[0], arr[1]);
  var lowNum = Math.min(arr[0], arr[1]);
  var num = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for(var i = 0; i <= (highNum - lowNum); i++){
    num[i] = lowNum + i  
}
  console.log (num.reduce(reducer));
}
sumAll([10, 5]);


function rot13(str) { // LBH QVQ VG!
    var newStr = [];
    for (var i = 0; i < str.length; i++) {
        newStr[i] = str.charCodeAt(i); // letters to num
    }
    var x = [];
    for(var i = 0; i < newStr.length; i++){//converting formula
    if (newStr[i] <= 77 && > 65){
       x[i] = newStr[i] + 13;
    }else{
        x[i] = newStr[i] - 13;
    }
    }
    var final = [];
    for (var i = 0;i < x.length; i++){
    final[i] = String.fromCharCode(x[i]);}//num to letters

    console.log(newStr);
}
rot13("SERR PBQR PNZC");


function getIndexToIns(arr, num) {
  //1st. sort arr from smallest - largest. 2nd push num into arr. then return num index to num.
    arr.push(num);
    arr.sort(function(a, b){return a-b});
    indexNum = arr.indexOf(num);
 console.log(indexNum);
}
getIndexToIns([2, 20, 10, 45], 19);


function mutation(arr) {
arr1 = arr[0].toLowerCase().split("").sort();
arr2 = arr[1].toLowerCase().split("").sort();
for (var i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i])===-1)
        console.log(false);
}
   console.log (true);
     }
mutation(["Mary", "mmatry"]);


function chunkArrayInGroups(arr, size) {
 answer = [];
   for (var i = 0; 0 < arr.length; i++){
    answer.push(arr.slice(0, size));
       arr = arr.slice(size);
   }
console.log(answer);
}

chunkArrayInGroups(["a", "b", "c", "d"], 1);


var dots = "...";
function truncateString(str, num) {
 if(num <= 3){
     return str.slice(0,  num) + dots;
 }else{
     return str.slice(0, num - 3) + dots;
 }
return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);


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
