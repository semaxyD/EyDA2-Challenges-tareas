import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes, createNote, updateNote, deleteNote } from '../redux/notesSlice';
import { useEffect, useState } from 'react';

export default function Notes() {
  const dispatch = useDispatch();
  const { items: notes, loading, error } = useSelector(state => state.notes);
  const [newNote, setNewNote] = useState('');

  // Cargar las notas al cargar el componente
  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Notas</h2>

      {/* Formulario para agregar una nueva nota */}
      <form onSubmit={(e) => {
        e.preventDefault();
        if (newNote.trim()) {
          dispatch(createNote(newNote));  // Crear la nueva nota
          setNewNote('');  // Limpiar el campo de entrada
        }
      }}>
        <input 
          value={newNote} 
          onChange={(e) => setNewNote(e.target.value)} 
          className="border p-2" 
          placeholder="Escribe una nueva nota"
        />
        <button className="ml-2 bg-blue-600 text-white px-3 py-1 rounded">Agregar</button>
      </form>

      {/* Mostrar mensajes de carga o error */}
      {loading && <p>Cargando notas...</p>}
      {error && <p className="text-red-500">Hubo un error al cargar las notas: {error}</p>}

      {/* Lista de notas */}
      <ul className="mt-4 space-y-2">
        {notes.map(note => (
          <li key={note.id} className="border p-2 flex justify-between items-center">
            <span>{note.text}</span>
            <div className="space-x-2">
              <button 
                onClick={() => {
                  const newText = prompt('Editar nota', note.text);
                  if (newText) dispatch(updateNote({ id: note.id, newText }));
                }} 
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Editar
              </button>
              <button 
                onClick={() => dispatch(deleteNote(note.id))} 
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
