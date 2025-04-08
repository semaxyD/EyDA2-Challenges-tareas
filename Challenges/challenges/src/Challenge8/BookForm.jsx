import React, {useState} from "react";

const BookForm = ({onAddBook}) => {
    const [book, setBook] = useState({
        name: "",
        isbn: "",
        author: "",
        editorial: "" 
    });

    const handleChange = (e) => {
        setBook({...book,[e.target.name]: e.target.value });
    };

    const handleSummit = (e) =>{
        e.preventDefault();
        onAddBook(book);
        setBook({ name: "", isbn: "", author: "", editorial: "" });
    };

    return (
        <form onSubmit={handleSummit} className="space-y-2">
            <input name="name" placeholder="Book Name" value={book.name} onChange={handleChange} className="border p-2 w-full" required />
            <input name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleChange} className="border p-2 w-full" required />
            <input name="author" placeholder="Author" value={book.author} onChange={handleChange} className="border p-2 w-full" required />
            <input name="editorial" placeholder="Editorial" value={book.editorial} onChange={handleChange} className="border p-2 w-full" required />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2">Agregar Libro</button>
        </form>
    );
};

export default BookForm;