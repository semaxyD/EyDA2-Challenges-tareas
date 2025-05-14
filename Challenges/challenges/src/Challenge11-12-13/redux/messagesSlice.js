import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dbRealTime, ref, push, set, onValue } from '../firebase/config';

// Escuchar mensajes en tiempo real
export const startMessagesListener = createAsyncThunk('messages/startListener', async (_, { dispatch }) => {
  const messagesRef = ref(dbRealTime, 'messages');

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();

    const parsedMessages = data
      ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
      : [];

    // Ordenar por timestamp ascendente (opcional)
    parsedMessages.sort((a, b) => a.timestamp - b.timestamp);

    dispatch(messagesSlice.actions.setMessages(parsedMessages));
  });
});

// Enviar mensaje a Firebase
export const sendMessage = createAsyncThunk('messages/send', async (messageText) => {
  const messagesRef = ref(dbRealTime, 'messages');
  const newMessageRef = push(messagesRef);

  await set(newMessageRef, {
    text: messageText,
    timestamp: Date.now(),
  });

  return { id: newMessageRef.key, text: messageText };
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setMessages: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default messagesSlice.reducer;
export const { setMessages } = messagesSlice.actions;
