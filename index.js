
// const {performance} = require('perf_hooks');
// const nemo = ['nemo'];
// const everyone = ['hekk','hihfw','ewihew','hfiwof','fhiqhfq','nemo','fhiqof','fiwqhf'];
// const large = new Array(1000).fill('nemo')

// function findNemo(array){
//   let t0 = performance.now()
//   for(let i=0;i<array.length; i++){
//     if (array[i] === 'nemo'){
//       console.log('found Nemo ')
//     }
//   }
//   let t1 = performance.now()
//   console.log('call to find nemo took ' + (t1-t0))
// };

// // findNemo(nemo)
// findNemo(large) // O(n) --> Linear time ()

////////////////////////////////////////////////////////////

// const boxes = [0,1,2,3,4,5]

// function logFirstTwoBoxes(boxes){
//   console.log(boxes[0]) //O(1)
//   console.log(boxes[1]) //O(1)
// }

// logFirstTwoBoxes(boxes) //0(2) -> 0(1) --> constant time (excellent)


// ////// find Big O
// function funChallenge(input){
//   let a = 10; //O(1)
//   a = 50 + 3; //O(1)

//   for(let i = 0; i< input.length; i++){ //O(n)
//     anotherFuncton(); //O(n)
//     let stranger = true //O(n)
//     a++; //O(n)
//   }
//   return a //O(1)
// }

// funChallenge(input) //BiG O: 3 + 4n  ---> O(n)

////////// find Big O


// function anotherFunChallenge(input) {
//   let a = 5; 
//   let b = 10;
//   let c = 50; //O(3)

//   for(let i=0; i<input; i++){ //O(n)
//     let x=i+1; //O(n)
//     let y = i+2; //O(n)
//     let = i + 3; //O(n)
//   }
//   for(let i=0; i<input; i++){ //O(n)
//     let p = j*2;//O(n)
//     let q = j*2;//O(n)
//   }
//   let whoAmI =  `i don't know` //0(4)
// }

// anotherFunChallenge() //Big O(4 + O(7)) --> O(n)


////////4 Rules of Big o 

//Worst Case
//remove constants 
//different terms for inputs

// log all pairs of Array

// const boxes = ['a','b','c','d','e'] 

// function logAllPairsOfArray(arr){
//   for(i=0;i<arr.length;i++){
//     for(j=0; j<arr.length; j++){
//       console.log(arr[i], arr[j])
//     }
//   }
// }

// // logAllPairsOfArray(boxes) O(n*n) -> O(n^2)


//question

// const checkMatch = (arr1,arr2) => {
//  for(i=0;i<arr1.length;i++){
//    for(j=0;j<arr2.length;i++){
//      if(arr1[i]===arr2[j]){
//        return true
//      }
//    }
//  }
//  return true
// }

//nested array --> O(n*n) - time complexity
//O(1) - space complexity

//////////object solution

// const checkMatch = (arr1,arr2) => {
//   //loop through first array and create object where properties === items in the array

//   //O(n+n) better when it comes to time complexity
//O(a) -> space complexity
//   let arrObj = {};
//   for(let i=0;i<arr1.length;i++){
//     if(!arrObj[arr1[i]]){
//       let item = arr1[i];
//       arrObj[item] = true;
//     }
//   }

//   //loop through second array and check if item in second array exists on created object

//   for(let j=0;j<arr2.length;j++){
//     if(arrObj[arr2[j]]){
//       return true
//     }
//   }
//   return false
// }


// console.log(checkMatch(['a','b','c','x'],['z','y','i']))
// console.log(checkMatch(['a','b','c',1],['1','y',1]))


// const checkMatch = (arr1,arr2) => arr1.some(item => arr2.includes(item))


// console.log(checkMatch(['a','b','c','x'],['z','y','i']))
// console.log(checkMatch(['a','b','c',1],['1','y',1]))

// class MyArr {
//   constructor() {
//     this.length = 0;
//     this.data = {}
//   }
//   get(index) {
//     return this.data[index]
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++
//     return this.length
//   }
// }

// const newArray = new MyArr();
// newArray.push('hi')
// console.log(newArray)


//reverse string

// function reverse(str){
//   let revStr = []

//   for(let i=str.length-1; i>=0; i--){
//     revStr.push(str[i])
//   }
//   return revStr.join('');
// }

// console.log(reverse('hi my name is Mudal 1i'))


// merge Arrays

// function merge(arr1,arr2){
//   const newArr = arr1.concat(arr2)
//   return newArr.sort((a,b) => a-b)
// }

// console.log(merge([0,3,4,31], [4,6,30]))



