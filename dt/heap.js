//MaxBinary Heap
class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }
  insert(val) {
    this.value.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.value.length - 1;

    const element = this.value[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.value[parentIndex];
      if (element <= parent) break;
      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
      if(this.value.length === 1) return this.values = []
    const max = this.value[0];
    const end = this.value.pop();
    this.value[0] = end;
    this.sinkDown();
    return max;
  }

  sinkDown() {
      let index = 0;
      const length = this.value.length;
      const element = this.value[0];
      while(true){
          let leftChildIndex = 2*index+1;
          let rightChildIndex = 2*index+2;
          let leftChild;
          let rightChild;
          let swap = null;
          if(leftChildIndex < length){
              leftChild = this.value[leftChildIndex]
              if(leftChild > element) {
                  swap = leftChildIndex;

              }
          }
          if(rightChildIndex < length){
              rightChild = this.value[rightChildIndex];
              if(swap === null && rightChild > element || (swap !== null) && rightChild > leftChild){
                  swap = rightChildIndex;

              }
          }
          if(swap === null) break;
          console.log(`Swapping node ${this.value[index]} with ${this.value[swap]}`)
          this.value[index] = this.value[swap]
          this.value[swap] = element;
          index = swap;


      }
  }
}
        //       100
        //    |        |
        //   50        90
        // |    |      |  |
        // 3    30    10  20
        // |
        // 1
        //  ====================
        //          90
        //    |        |
        //   50        20
        // |    |      |  |
        // 3    30    10  1
        //  ====================
        //       50
        //    |       |
        //   30        20
        // |    |      |  
        // 3    1    10  



let SuperHeap = new MaxBinaryHeap();
SuperHeap.insert(1);
SuperHeap.insert(10);
SuperHeap.insert(50);
SuperHeap.insert(100);
SuperHeap.insert(30);
SuperHeap.insert(20);
SuperHeap.insert(90);
SuperHeap.insert(3);
console.log(SuperHeap);
console.log("\n\n");
console.log(SuperHeap.extractMax());
console.log(SuperHeap.extractMax());
console.log(SuperHeap);