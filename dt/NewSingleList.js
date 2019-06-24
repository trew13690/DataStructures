// const {createLogger, format, transports}  = require('winston')
// const logger = createLogger({
//     level: 'debug',
//     format: format.combine(
//     format.colorize(),
//     format.timestamp({
//         format: 'YYYY-MM-DD HH:mm:ss'
//     }),
//     format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)),
//     json: true,
//     prettyPrint: true;
//     transports: [ new transports.Console()]
// });

// logger.info("Starting logging system:.....");
// logger.info("Testing out Single LinkedList");

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (this.head === null) {
      this.head = this.tail = new Node(val);
    } else {
      var temp = this.tail;
      this.tail = new Node(val);
      temp.next = this.tail;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === null) return undefined;
    var current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  traverse() {
    var current = this.head;
    while (current) {
      if (current === this.head) console.log(`\n${current.val}-> HEAD`);
      if (current.next === null) console.log(`||\n${current.val} -> TAIL\n `);
      else if ((current.next !== null) & (current !== this.head)) {
        console.log(`||\n${current.val}`);
      }
      current = current.next;
    }
  }

  shift() {
    if (this.length === 0) return undefined;

    var temp = this.head;
    this.head = temp.next;
    temp.next = null;

    this.length--;
    if (this.length === 0) this.tail = null;
    return temp;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.head;
  }

  get(index) {
    let counter = 0;
    if (index <= 0 || index > this.length) return null;
    let currentNode = this.head;
    if (index === 0) return this.head;
    else if (index === this.length) return this.tail;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
      console.log(`Finding node at node ${counter}: ${currentNode.val}`);
    }

    return currentNode;
  }

  set(index, value) {
    let changedNode = this.get(index);
    if (changedNode === null) return false;
    changedNode.val = value;
    return changedNode.val;
  }

  inset(index, value) {
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    if (index > this.length || index < 0) return false;
    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    console.log(`Inserting node between ${prevNode.val} and ${nextNode.val}`);
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return pop();

    var prevNode = this.get(index - 1);
    var removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse(){
   var node = this.head;
   this.head = this.tail;
   this.tail = node;
    let prev = null;
    let next = null;
   for(let i =0; i < this.length ; i ++){
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;

   }
   return this;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var someList = new SingleLinkedList();
console.log(someList.push(10));
console.log(someList.push(50));
console.log(someList.push(100));
console.log(someList.push(302));
console.log(someList.push(12390));
console.log(someList.get(4));
console.log("\n\n");
someList.traverse();
console.log(someList.set(3, 6000));
someList.traverse();
console.log(someList.inset(2, 75));
someList.traverse();
someList.inset(0, 1);
someList.traverse();
someList.delete(2)
someList.traverse();
someList.reverse();
someList.traverse();
