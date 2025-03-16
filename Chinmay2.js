// ARRAY METHODS

// map() , filter() , reduce(), forEach()
// find(), findIndex(), every() , some()

//1. map() - Find Age

// let birthYear = [1989, 1990, 1991, 1992]

// let a = birthYear.map(function(ele){
//     return 2024 - ele
// })
// console.log(a)


// filter() - mark above 40

// let marks = [33,55,33,44,56,66]

// let b = marks.filter(function(ele){
//     return ele > 40
// })
// console.log(b)

//--------------------------

// let transactions = [44,55,-88,66,77,-99,100,56]
// let deposit = transactions.filter(function(el){
//     return el > 0
// })
// console.log(deposit)

// let withdrawl = transactions.filter(function(el){
//     return el < 0
// })
// console.log(withdrawl)


// // reduce() - sum
// let n = [10,20,70]

// let c = n.reduce(function(acc,ele){
//     return acc + ele
// },0)
// console.log(c)

// forEach()

// let cities = ["Pune","Mumbai","Banglore","Kolkata"]

// cities.forEach(function(ele){
//     console.log("Welcome " + ele)
// })

//-------------------------------------------------

// find() - return the first element that satisfies the cond 
//          and findindex() return the first element "index" that satifies the condition

let num = [1,2,3,4,5,6,7]

let x = num.find(function(ele){
    return ele > 4
})
console.log(x)

let y = num.findIndex(function(ele){
    return ele > 4
})
console.log(y)

//--------------------------------------------------------------

// let arrayOne = [11,22,33,44,55]

// // // every() - boolean 

// let d = arrayOne.every(function(ele){
//     return ele > 30
// })
// console.log(d)

// // // some
// let e = arrayOne.some(function(ele){
//     return ele > 30
// })
// console.log(e)

// // map() ------> array
// // filter() ---- array 
// // reduce() ----> value
// // forEach() ---- no return type 

// // findIndex() -- number
// // find()--- datatype
// // some() - boolean
// // every() - boolean