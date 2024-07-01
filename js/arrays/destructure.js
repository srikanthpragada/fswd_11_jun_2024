let a = [1, 2, 3]

// let n1 = a[0]
// let n2 = a[1]
// let n3 = a[2]
// console.log(n1, n2, n3)

// Destructuring assignment 
let [n1, n2, n3] = a
console.log(n1, n2, n3)

// Ignore 2nd element 
let [x, ,z] = a
console.log(x, z)

// Destructuring assignment 
let [v1, v2, v3] = [10, 20]
console.log(v1, v2, v3)

// Taking rest of values 
let [p, , ...q] = [1, 2, 3, 4]
console.log(p, q)

// using default value 
let [e, f, g = 10] = [1, 2]
console.log(e, f, g)



