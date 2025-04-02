class DoublyNode{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.current = null
    }

    append(value){
        const newNode = new DoublyNode(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.current = newNode
        }else{
            newNode.prev = this.tail
            this.tail.node = newNode
            this.tail = newNode

        }
    }

    forward(){
        if(this.current && this.current.next){
            this.current = this.current.next
            return this.current.value
        }
        return null
    }

    back(){
        if(this.current && this.current.prev){
            this.current = this.current.prev
            return this.current.value
        }
        return null
    }
}


export default DoublyLinkedList;