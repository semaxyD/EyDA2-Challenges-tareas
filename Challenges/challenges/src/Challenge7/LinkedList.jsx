class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.current = null
    }

    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.current = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    next(){
        if(this.current && this.current.next){
            this.current = this.current.next
            return this.current.value
        }
        return null
    }

    reset(){
        this.current = this.head
    }
}

// 📌 Instancia con datos de prueba (canciones)
const playlist = new LinkedList();
playlist.append("Song 1 🎵");
playlist.append("Song 2 🎶");
playlist.append("Song 3 🎼");

export default playlist;
