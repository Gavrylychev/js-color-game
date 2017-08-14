// function replaceStr(str){
//   var newStr = str.replace(/-/g, "_");
//   return newStr;
// }
//_____________________
// function isFactorial(num){
//   if(num == 0 || num == 1){
//     return 1;
//   }else{
//     return num*isFactorial(num-1);
//   }
// }
//_____________________
// function reverse(arr){
//   for(var i = arr.length - 1; i >=0; i--){
//     console.log(arr[i]);
//   }
// }
// reverse([5,2,1,6]);
// _____________________
// function reverse(arr){
// 	var arr1 = [];
//   for(var i = arr.length - 1; i >= 0; i--){
// 		arr1.push(arr[i]);
//   }
// 	return(arr1);
// }
//
//
// reverse([1,2,3,4]);
// _____________________
// function isUniform(arr){
//   for(var i = 0; i < arr.length-1; i++){
//   	if(arr[i] !== arr[i+1]){
//       return false;
//     }else{
//     }
//   }
//   return true;
// }
// isUniform([1,1,1,1]);

// function isUniform(arr){
//  var first = arr[0];
//  for(var i = 1; i < arr.length; i++){
//    if(arr[i] !== first){
//    return false;
//    }
//  }
//  return true;
// }
// _____________________
// function sum(arr){
//   return arr.reduce(function(a,b){
//     return a + b;
//   });
// }
// console.log(sum([1,3,1,3]));
//
// function sumArr(arr){
//  var total = 0;
//  arr.forEach(function(elem){
//    total += elem;
//  });
//  return total;
// }
//  _____________________
// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }
// console.log(getMaxOfArray([10,20,15,12,98]));

// function getMax(arr){
//   var max = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// _____________________
// function sumOnly100Plus(arr) {
//   var total = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if ((typeof(arr[i]) === "number") && arr[i] > 100) {
//       total += arr[i];
//     }
//   }
//   return total;
// }
// console.log(sumOnly100Plus([100, " ", "101", 101, 200, 65, 55]));
// _____________________
// function extractOddArr(arr){
//   var oddArr = [];
//   for( var i = 0; i < arr.length; i++){
//     if(i % 2 !== 0){
//       oddArr.push(arr[i]);
//     }
//   }
//   return oddArr;
// }
// console.log(extractOddArr([1,2,3,4,5,6,7,8,9]));
// _____________________
var moviesArr =[
  {title: "\"Star Wars\"",
   rating: 5,
   watched: true
  },
  {title: "\"Some girl's movie\"",
   rating: 3,
   watched: false
  },
  {title: "\"Ring brotherhood\"",
   rating: 5,
   watched: true
  }
];
for(var i = 0; i < moviesArr.length; i++){
  if(moviesArr[i].watched === true){
    console.log("You have watched " + moviesArr[i].title + " - " + moviesArr[i].rating + " stars");
  }else{
    console.log("You have not seen " + moviesArr[i].title + " - " + moviesArr[i].rating + " stars");
  }
}
