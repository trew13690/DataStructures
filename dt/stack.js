class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    console.log(`Created a new stack`);
    console.log(this);
  }

  pop(){
      if(!this.first) return null;
      let temp = this.first;
      if(this.first === this.last) return  this.last = null
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) return (this.first = this.last = newNode);
    else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this;
  }

  print() {
    let current = this.first;
    while(current){
        if(current === this.first){
        console.log(`\nPrinting Stack:`)
        console.log(`=================\n\t${current.value}`)
        }
        else{
        console.log(`=================\n\t${current.value}`)
        }
        current = current.next;
    }
    console.log(`=================\n`)


}
}

let SuperStack = new Stack();
console.log(SuperStack.push(10));
console.log(SuperStack.push(15));
SuperStack.push(30);
SuperStack.print();
SuperStack.pop();
SuperStack.print()

