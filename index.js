const LinkedList = require('./LinkedList')

const list = new LinkedList()

list.append('My')
list.append('name')
list.prepend('Hi')
list.append('Slim')
list.append('Shady')
list.insertAfter('name', 'is')
list.prepend(42)
list.append(24)
list.remove(24)
list.remove(42)

console.log(list.toArray());