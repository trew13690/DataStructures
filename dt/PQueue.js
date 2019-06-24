//MinBinary Heap with Priotiy Queue
class Node {
  constructor(val, p) {
    this.val = val;
    this.p = p;
  }
}

class PQueue {
  constructor() {
    this.value = [];
  }
  enqueue(val, p) {
    let newNode = new Node(val, p);
    this.value.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.value[parentIndex];
      if (element.p >= parent.p) break;
      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    if (this.value.length === 1) return (this.values = []);
    const min = this.value[0];
    const end = this.value.pop();
    this.value[0] = end;
    this.sinkDown();
    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild.p < element.p) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild.p < element.p) ||
          (swap !== null && rightChild.p < leftChild.p)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      console.log(
        `Swapping node ${this.value[index]} with ${this.value[swap]}`
      );
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }
}

let SuperPQueue = new PQueue();
SuperPQueue.enqueue("Finish DataStuc Course", 3);
SuperPQueue.enqueue("Find an Apartment", 7);
SuperPQueue.enqueue("Practice Leetcode", 2);
SuperPQueue.enqueue("Hire a Writer to do resume", 4);
SuperPQueue.enqueue("Do Mock interviews", 3);
SuperPQueue.enqueue("Apply to jobs", 5);
SuperPQueue.enqueue("Go to Onsite Interviews", 6);
SuperPQueue.enqueue("Fuck my wife really good", 1);
console.log(SuperPQueue);
console.log("\n\n");
console.log(SuperPQueue.dequeue());
console.log("\n\n");
console.log(SuperPQueue);
console.log("\n\n");
console.log(SuperPQueue.dequeue());
console.log("\n\n");
console.log(SuperPQueue);
console.log("\n\n");
console.log(SuperPQueue.dequeue());
console.log("\n\n");
console.log(SuperPQueue);
