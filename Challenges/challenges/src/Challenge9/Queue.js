class Node {
    constructor(person){
        this.person = person;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue(person) {
        const newNode = new Node(person);
        if (!this.front){
            this.front = this.rear = newNode
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue(){
        if (!this.front) return null;
        const removed = this.front;
        this.front = this.front.next;
        if(!this.front) this.rear = null;
        return removed.person;
    }

    toArray(){
        const result = [];
        let current = this.front;
        while(current){
            result.push(current.person);
            current = current.next;
        }
        return result;
    }
}

const ATMQueue = new Queue();

// Mock data
ATMQueue.enqueue({ name: "Ana", amount: 200 });
ATMQueue.enqueue({ name: "Luis", amount: 350 });
ATMQueue.enqueue({ name: "Carla", amount: 150 });

export default ATMQueue;