class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export default class DoubleLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

            this.length++;
        }
        return this;
    }


    pop() {
        if (this.head === null) return undefined
        let temp = this.tail;
        if (this.length === 1) this.tail = this.head = null;

        this.tail = temp.prev
        this.tail.next = null;
        this.length--;
        return this;
    }

    shift() {
        if (this.head === null) return undefined
        if (this.length === 1) this.head = this.tail = null
        let temp = this.head
        this.head = temp.next
        this.head.prev = null;
        temp.next = null;
        this.length--;
        return this;
    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) this.head = this.tail = newNode;
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return newNode;

    }

    get(index) {
        if (index < 0 || index > this.length) return null;
        if (index < (this.length / 2)) {
            let searchNode = this.head
            for (let i = 0; i <= this.length; i++) {
                if (i === index) {
                    return searchNode;
                }
                searchNode = searchNode.next;

            }
        }
        if (index >= (this.length / 2)) {
            let searchNode = this.tail;
            for (let i = this.length; i >= index; i--) {
                if (i === index) {
                    return searchNode;
                }
                searchNode = searchNode.prev;

            }
        }
        return undefined
    }


    set(val, index) {
        let ChangedNode = this.get(index);
        if (ChangedNode !== null) {
            ChangedNode.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) {

        let newNode = new Node(val);
        if (index < 0 || index > this.length) return false
        if (this.length === 0) return this.unshift(val);
        if (index === this.length) return this.push(val)
        let nextNode = this.get(index);
        let prevNode = this.get(index - 1);
        if (nextNode !== false && prevNode !== false) {
            newNode.next = nextNode;
            newNode.prev = prevNode;

            prevNode.next = newNode;
            nextNode.prev = newNode;
            this.length++
            return true;
        }
        return false;
    }

    remove(index) {
        if (index < 0) return false;
        if (index >= this.length) return false;
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let removedNode = this.get(index);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;

        nextNode.prev = prevNode
        prevNode.next = nextNode
        removedNode.next = null
        removedNode.prev = null
        this.length--;
        return true;


    }

    reverse(){
        if(this.length < 2) return this;
        for(let node = this.head; node !== null;){
            let nextNode = node.next;
            node.next = node.prev;
            node.prev = nextNode;
            node = nextNode

        }
        [this.head, this.tail] = [this.tail, this.head]

    return this;
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
}


let SuperList = new DoubleLinkedList()
SuperList.push(100);
SuperList.push(50);
SuperList.push(25);
SuperList.push(20);
SuperList.push(10);
SuperList.push(1);
SuperList.push(5);
SuperList.traverse();
SuperList.traverse();
SuperList.shift();
SuperList.traverse();
SuperList.unshift(40);
SuperList.traverse();
console.log(SuperList.get(2));
console.log(SuperList.get(4));
SuperList.set(2, 5);
SuperList.traverse();
SuperList.insert(69, 2);
SuperList.traverse()
SuperList.remove(2)
SuperList.traverse()
SuperList.reverse()
SuperList.traverse()