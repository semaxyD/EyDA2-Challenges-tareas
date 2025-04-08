import React from "react";

const BookStacked = ({books}) => {
    return (
        <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Pila de libros:</h3>
            {books.lenght === 0 ? (
                <p>No hay libros en la pila 💀</p>
            ):(
                <ul className="space-y-2">
                    {books.map((book,index) => (
                        <li key={index} className="border p-2">
                            <strong>{book.name}</strong> - {book.author}
                            <br/>
                            ISBN: {book.isbn} | Editorial: {book.editorial}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookStacked;