import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config'; 

// Acción para cargar todas las notas desde Firestore
export const fetchNotes = createAsyncThunk('notes/fetch', async () => {
  const querySnapshot = await getDocs(collection(db, 'notes'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

// Acción para crear una nueva nota en Firestore
export const createNote = createAsyncThunk('notes/create', async (text) => {
  const docRef = await addDoc(collection(db, 'notes'), { text });
  return { id: docRef.id, text };
});

// Acción para actualizar una nota en Firestore
export const updateNote = createAsyncThunk('notes/update', async ({ id, newText }) => {
  const ref = doc(db, 'notes', id);
  await updateDoc(ref, { text: newText });
  return { id, text: newText };
});

// Acción para eliminar una nota en Firestore
export const deleteNote = createAsyncThunk('notes/delete', async (id) => {
  await deleteDoc(doc(db, 'notes', id));
  return id;
});

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        const index = state.items.findIndex(note => note.id === action.payload.id);
        if (index !== -1) {
          state.items[index].text = action.payload.text;
        }
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.items = state.items.filter(note => note.id !== action.payload);
      });
  }
});

export default notesSlice.reducer;
