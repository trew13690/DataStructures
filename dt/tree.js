class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root) {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    } else {
      this.root = newNode;
      return this;
    }
  }

  search(val) {
    if (!this.root) return false;
    if ((this.root.value = val)) return true;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function tranverse(node){
        data.push(node.value);
        if(node.left) tranverse(node.left)
        if(node.right) tranverse(node.right);

    }
    tranverse(current);    
    return data;
  }

  DFSPostOrder(){
      let data = [];
      let current = this.root;
      function tranverse(node){
        if(node.left) tranverse(node.left);
        if(node.right) tranverse(node.right);
        data.push(node.value);
      }

      tranverse(current)
      return data;
  }

  DFSInOrder(){
    let data = [];
    let current = this.root;
    function tranverse(node){
      if(node.left) tranverse(node.left);
      data.push(node.value);
      if(node.right) tranverse(node.right);
      
    }

    tranverse(current)
    return data;
}


  // print(){
  //     let current = this.root;
  //     let left = true;
  //     while(current!== null){
  //        if(current= this.root){
  //         console.log(`\nPrinting Tree Object\n=====================`);
  //         console.log(`${this.root.value}`)
  //        }
  //        else if(left === true){
  //            let parentRight = current.right;
  //            while(current !== null){
  //            console.log(`|\n|\n|__|>${current.value}`)
  //            console.log(`|\n|\n|_____|_____|>${current.left.value}`)
  //            console.log(`|\n|\n|_____|_____|>${current.right.value}`)
  //            current = current.left;
  //            }
  //            current = parentRight
  //            while(current !== null){
  //             console.log(`|\n|\n|__|>${current.value}`)
  //             console.log(`|\n|\n|_____|_____|>${current.left.value}`)
  //             console.log(`|\n|\n|_____|_____|>${current.right.value}`)
  //             current = current.right;
  //            }
  //        }
  //        break;
  //     }
  // }
}

//             25
//         |----------|
//        20         30
//     |------|       |-----|
//     15    22      29    35
//    |---|                  |
//   10  18                  40
  
let SuperSearchTree = new BinarySearchTree();
console.log(SuperSearchTree.insert(25));
console.log(SuperSearchTree.insert(20));
console.log(SuperSearchTree.insert(30));
console.log(SuperSearchTree.insert(35));
console.log(SuperSearchTree.insert(40));
console.log(SuperSearchTree.insert(29));
console.log(SuperSearchTree.insert(15));
console.log(SuperSearchTree.insert(10));
console.log(SuperSearchTree.insert(22));
console.log(SuperSearchTree.insert(18));
console.log(SuperSearchTree.BFS());
console.log('\n\n');
console.log(SuperSearchTree.DFSPreOrder())
console.log('\n\n');
console.log(SuperSearchTree.DFSPostOrder())
console.log('\n\n');
console.log(SuperSearchTree.DFSInOrder())
