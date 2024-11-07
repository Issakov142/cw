// function squareDigits(num) {
//   let arrNum = num.toString().split('');
//
//   let newArrNum = [];
//
//   for (let i = 0; i < arrNum.length; i++) {
//     newArrNum.push(arrNum[i] ** 2);
//   }
//   console.log(newArrNum);
//
//   return Number(newArrNum.join(''));
// }
//
// console.log(squareDigits(564));
//
//

//==========
/*
function getCount(str) {
  debugger
  let arr = str.split("");
  let vowels = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === "a" || arr[i] == "e"  || arr[i]=="i" || arr[i]=="o" || arr[i]=="u"){
      vowels += 1
    }
  }

  return vowels;
}

console.log(getCount("brabus"))*/


// function isIsogram(str) {
//     let arr = str.toLowerCase().split('')
//     for (i = 0; i <= arr.length; i++) {
//         for (j = i++; j <= arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 return false
//             }
//         }
//     }
//     return true
// }
//
// function highAndLow(numbers) {
//
//     let lowest = numbers.split(" ").map((num) => +num).reduce((acc, num) => acc < num ? acc : num)
//     let highest = numbers.split(" ").map((num) => +num).reduce((acc, num) => acc > num ? acc : num)
//     let result = `${highest} ${lowest}`
//
//     return result
// }
// let name = "Jogn doe"
// let now = "Banana"
// let arr = name.split(" ")
// let abbr = [arr[0][0], arr[1][0]]
// console.log(abbr)
// console.log(now[0])

// let superObj = {
//     property1: [
//         {id: "u2", title: 'HTML&CSS', isDone: true},
//         {id: "u3", title: 'JS', isDone: true},
//         {id: "u4", title: 'ReactJS', isDone: false},
//     ],
//     property2: [
//         {id: "u5", title: 'Rest API', isDone: true},
//         {id: "u6", title: 'GraphQL', isDone: false},
//     ],
// }
//
// let copyObj = {...superObj}
// copyObj.property1 = "Blablabla"
// console.log(superObj)
// console.log(copyObj)
//
// const numbers = [1, 2, 3];
// const result = numbers.forEach((number) => number+number);
// console.log(numbers); // Output: undefined

// function findShort(s){
//     debugger
//     return s.split(" ").reduce((acc, word)=>acc.length < word.length ? acc : word ).length
// }
//
// let str = "bitcoin take over the world maybe who knows perhaps"
// // console.log(str.length())
//
// console.log(findShort(str))

// function pluck(objs, name) {
//     let res = []
//
//     for (let i = 0; i < objs.length; i++) {
//         if (objs[i].name) {
//
//             res.push(objs[i][name])
//         } else {
//
//             res.push(objs[i][name])
//         }
//         console.log(res)
//     }
//     return res
// }
// function pluck(objs, name) {
//    return objs.map((obj)=>obj[name])
// }
// console.log(pluck([{a:1, b:3}, {a:2}], 'b'))
// function pluck(objs, name) {
//     let res = []
//
//     for (let i = 0; i < objs.length; i++) {
//         res.push(objs[i][name])
//     }
//     return res
// }