class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        // TO DO - ADD edge case for redundunt key
        if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = [];
        }

    }
    addEdge(vertex, vertex2){
        this.adjacencyList[vertex].push(vertex2);
        this.adjacencyList[vertex2].push(vertex)
    }
    removeEdge(vertex, vertex2){
        this.adjacencyList[vertex] = this.adjacencyList[vertex].filter( v=> v !== vertex2);
        this.adjacencyList[vertex2]  = this.adjacencyList[vertex2].filter( v => v !== vertex)
    }
    removeVertex(vertex){
        
       while(this.adjacencyList[vertex].length){
           const adjacencyVertex = this.adjacencyList[vertex].pop()
           this.removeEdge(vertex, adjacencyVertex);
       }
       delete this.adjacencyList[vertex]
    }

    DFSR(start){
        const result = []
        const visted = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visted[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visted[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start)
        return result;

    }

    DFSI(start){
        let stack = [start]
        let result = [];
        let visted = {};
        let vertex 
        visted[start] = true;
        while(stack.length){
          vertex = stack.pop();
          result.push(vertex);
            this.adjacencyList[vertex].forEach(n => {
                if(!visted[n]){
                    visted[n] = true;
                    stack.push(n);
                }
            });
        }

        return result;
    }

    breadthFirst(start){
        const queue = [start]
        const result = []
        const visted = {};
        visted[start] = true
        let current
        while(queue.length){
             current = queue.shift()
             result.push(current);
           
             this.adjacencyList[current].forEach(n =>{
                 if(!visted[n]){
                     visted[n] = true;
                     queue.push(n);
                 } 
             })
        }
        return result;
    }
}



// let SuperGraph = new Graph()
// SuperGraph.addVertex("Seattle")
// SuperGraph.addVertex("Oregon")
// SuperGraph.addVertex("SanFran")
// SuperGraph.addVertex("France")
// SuperGraph.addVertex("Norway")
// SuperGraph.addEdge("Seattle", "Oregon")
// SuperGraph.addEdge("Seattle", "France")
// SuperGraph.addEdge("SanFran", "Oregon")
// SuperGraph.addEdge("SanFran", "Norway")
// console.log(SuperGraph)
// console.log("\n\n")
// SuperGraph.removeEdge("Seattle", "Oregon")
// SuperGraph.removeVertex("SanFran");
// console.log(SuperGraph);

let SuperGraph = new Graph()
SuperGraph.addVertex("A");
SuperGraph.addVertex("B");
SuperGraph.addVertex("C");
SuperGraph.addVertex("D");
SuperGraph.addVertex("E");
SuperGraph.addVertex("F");

SuperGraph.addEdge("A", "B")
SuperGraph.addEdge("A", "C")
SuperGraph.addEdge("B", "D")
SuperGraph.addEdge("C", "E")
SuperGraph.addEdge("D", "E")
SuperGraph.addEdge("D", "F")
SuperGraph.addEdge("E", "F")

console.log(SuperGraph);
console.log('\n\n');
console.log('Depth First Search Recurision')
console.log(SuperGraph.DFSR("A"))
console.log('\n\n');

console.log(SuperGraph);
console.log('\n\n');
console.log('Depth First Search Inter')
console.log(SuperGraph.DFSI("A"))
console.log('\n\n');


console.log(SuperGraph);
console.log('\n\n');
console.log('Breadth First Search Inter')
console.log(SuperGraph.breadthFirst("A"))
console.log('\n\n');