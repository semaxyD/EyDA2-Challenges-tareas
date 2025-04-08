import React, {useState} from "react";
import BookStacked from "./BookStacked";
import BookForm from "./BookForm";
import BookStack from "./BookStack"
import bookStack from "./BookStack";

const App8 = () =>{
  const [books,setBooks] = useState(bookStack.getAll());

  const handleAddBook = (newBook) =>{
    bookStack.push(newBook);
    setBooks(bookStack.getAll());
  };

  return(
    <div className="max-w md mx-auto p-4">
      <h1 className="text-2x1 font-bold mb-4">Gestión de Pila de Libros</h1>
      <BookForm onAddBook={handleAddBook}/>
      <BookStacked books={books}/>
    </div>
  );
};

export default App8