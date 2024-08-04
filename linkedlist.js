class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSize = 0;
    }
    
    append(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.currentSize++;
    }

    prepend(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.currentSize++;
    }
    
    size() {
        return this.currentSize;
    }
    
    head() {
        return this.head;
    }
    
    tail(){
        return this.tail;
    }
    
    at(index) {
        if (index > this.currentSize || index < 0) return null;
        let current = this.head;
        let counter = 0;
        
        while (counter < index) {
            current = current.next;
            counter++;
        }
        
        return current.data;
    }

    pop() {
        if (this.head === null) return null;
        if (this.head === this.tail) return this.removeFirst();
        let current = this.head;
        let previous = null;
        while (current !== this.tail) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;
        this.currentSize--;
        return current.data;
    }
    
    contains(data) {
        let current = this.head;
        while (current !== null) {
            if (data === current.data) return true;
            current = current.next;
        }
        return false;
    }
    
    find(obj) {
        let current = this.head;
        let counter = 0;

        while (current !== null) {
            if (current.data === obj) return counter;
            current = current.next;
            counter++;
        }

        return null; 
    }

    toString() {
        let current = this.head;
        let str = '';

        while (current !== null) {
            str += `(${current.data}) -> `;
            current = current.next;
        }
        str += "null";
        return str;
    }

    removeFirst() {
        if (this.head === null) return null;
        const temp = this.head.data;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.currentSize--;
        return temp;
    }

    insertAt(index, data) {
        if(index > this.currentSize || index < 0)
            return null;
    
        if(index === 0){
            this.prepend(data);
            return;
        }

        if(index === this.currentSize - 1){
            this.append(data);
            return;
        }

        const node = new Node(data);
        let current = this.head;
        let previous = null;
        let counter = 0;

        while(counter < index){
            previous = current;
            current = current.next;
            counter++;
        }

        previous.next = node;
        node.next = current;

        this.currentSize++;
    }

    removeAt(index){
        if(index > this.currentSize || index < 0)
            return null;

        if(index === 0){
            this.removeFirst();
            return;
        }

        if(index === this.currentSize - 1){
            this.pop();
            return;
        }
        
        let current = this.head;
        let previous = null;
        let counter = 0;

        while(counter < index){
            previous = current;
            current = current.next;
            counter++;
        }

        previous.next = current.next;
        this.currentSize--;
    }

    remove(data) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (data === current.data) {
                if (this.head === current) return this.removeFirst();
                this.currentSize--;
                previous.next = current.next;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }


}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
