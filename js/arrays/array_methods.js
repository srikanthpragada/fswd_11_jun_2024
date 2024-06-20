let names = ["C++", "JavaScript", "Java", "Python", "Ruby", "c" ]

names.push("TypeScript")
console.log(names)

names.splice(1,1)   // Delete 0th element 
console.log(names)

console.log(names.indexOf("Python"))

names.sort()
console.log(names)