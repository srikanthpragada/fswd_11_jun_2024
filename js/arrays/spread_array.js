let a = [1,2,3]
let b = a                       // create an alias 
let c = [...a]                 // spread array and create a copy 
let d = [0, ...a, 10]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

a.push(4)

console.log(a, b, c, d)