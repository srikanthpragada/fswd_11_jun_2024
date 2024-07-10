
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Event Handler 
const countHandler = (count) => console.log(count)

// Register handler for count event 
eventEmitter.on('count', countHandler)
eventEmitter.on('count', (count) => console.log(`Count = ${count}`))

// Raise Event - count and pass data to event handlers
eventEmitter.emit('count', 1)

// Remove event handler from event 
eventEmitter.removeListener('count', countHandler)

eventEmitter.emit('count', 10)
