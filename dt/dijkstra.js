class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // TO DO - ADD edge case for redundunt key
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex, vertex2, weight) {
    this.adjacencyList[vertex].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex, weight });
  }
  removeEdge(vertex, vertex2) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dijkstra(start, end) {
    const nodes = new PQueue()
    const distances = {};
    const previous = {};
    let smallest;
    let path = []
    // build up initi state
    for (let vertex in this.adjacencyList) {
        if(vertex === start){
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
        }
        else{
            distances[vertex ] = Infinity;
            nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }

    // as long as there is somthing to visit
    while(nodes.value.length){
        smallest = nodes.dequeue().val;
        if(smallest === end ){
            console.log("\n==============")
            console.log(distances)
            console.log(previous)
            console.log("\n==============")
            while(previous[smallest]){
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
            
            /// WE ARE DONE 
            // BUILD PATH 
        }
        if(smallest || distances[smallest] !== Infinity){
            for(let n in this.adjacencyList[smallest]){
                let nextNode = this.adjacencyList[smallest][n]
                
                // calculate new distance to n node 

                let candidate = distances[smallest] + nextNode.weight;
                let nextN = nextNode.node
                if(candidate < distances[nextN]){
                    // updating new smalles distance to N
                    distances[nextN] = candidate;
                    // updating previous - How we got to N
                    previous[nextN] = smallest;
                    // enqueue in priority queue with new priority
                    nodes.enqueue(nextN, candidate)

                }
            }
        }
    }
   
    return console.log(`The path is ${path.concat(smallest).reverse()}`);
  }
}

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
  

// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, p) {
//     this.values.push({ val, p });
//     this.sort();
//   }

//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.p - b.p);
//   }
// }

let SuperWeightedGraph = new WeightedGraph();
SuperWeightedGraph.addVertex("A");
SuperWeightedGraph.addVertex("B");
SuperWeightedGraph.addVertex("C");
SuperWeightedGraph.addVertex("D");
SuperWeightedGraph.addVertex("E");
SuperWeightedGraph.addVertex("F");
SuperWeightedGraph.addEdge("A", "B", 4);
SuperWeightedGraph.addEdge("A", "C", 2);
SuperWeightedGraph.addEdge("B", "E", 3);
SuperWeightedGraph.addEdge("C", "D", 2);
SuperWeightedGraph.addEdge("C", "F", 4);
SuperWeightedGraph.addEdge("D", "E", 3);
SuperWeightedGraph.addEdge("F", "E", 1);
SuperWeightedGraph.addEdge("F", "D", 1);
console.log(SuperWeightedGraph.adjacencyList);
console.log('\n\n')
console.log(SuperWeightedGraph.dijkstra("A", "E"))