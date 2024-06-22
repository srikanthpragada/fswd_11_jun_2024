function greet(user = 'Guest', message = 'Hello') {
    console.log(`${message} ${user}`)
}


greet('Tom', 'Hi')
greet('Jack')
greet()