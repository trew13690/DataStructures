class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }

}

class Queue{
    constructor(){
        this.first = null;
        this.next = null;
        this.size = 0;

    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.first) return this.first = this.last = newNode
        this.last.next = newNode;
        this.last = newNode;
        this.size++
        return this
    }
    dequeue(){
        if(!this.first) return null
        let node = this.first
        if(this.first === this.last ) return this.first = this.last = null;
        this.first = this.first.next;
        --this.size;
        return this;
    }

    print(){
        let current = this.first;
        while(current){

            if(current == this.first) 
            {
                console.log(`\nPrinting Queue`)
                console.log(`================`)
                console.log(`\t|${current.value}|`)
                console.log(`\t|****|`)
            }
            else{
                console.log(`\t|${current.value}|`)
                console.log(`\t|****|`)
            }
           
            current = current.next;

        }
        console.log(`================`)
    }
}

let SuperQueue = new Queue;
SuperQueue.enqueue(10)
SuperQueue.enqueue(300)
SuperQueue.enqueue(1000)
SuperQueue.print()
SuperQueue.dequeue()
SuperQueue.print()