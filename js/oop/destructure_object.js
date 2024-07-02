let p = { fullname: 'Larry', company: "Google" }

// copy properties to variables 
let { fullname, company, age = 30} = p

console.log(fullname, company, age)


// copy properties to variables with different names
let { fullname: n, company: c } = p
console.log(n, c)




