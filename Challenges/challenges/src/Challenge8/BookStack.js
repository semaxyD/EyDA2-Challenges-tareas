class Stack {
    constructor(){
        this.stack = [];
    }

    push(book) {
        this.stack.push(book);
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    getAll(){
        return [...this.stack].reverse();
    }

    isEmpty(){
        return this.stack.length === 0;
    }
}

const bookStack = new Stack()

bookStack.push({ name: "Clean Code", isbn: "9780132350884", author: "Robert C. Martin", editorial: "Prentice Hall" });
bookStack.push({ name: "The Pragmatic Programmer", isbn: "9780201616224", author: "Andrew Hunt", editorial: "Addison-Wesley" });

export default bookStack;