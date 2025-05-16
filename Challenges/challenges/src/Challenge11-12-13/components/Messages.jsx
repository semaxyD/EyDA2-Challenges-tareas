import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { startMessagesListener, sendMessage } from '../redux/messagesSlice';

export default function Messages() {
  const dispatch = useDispatch();
  const { items: messages, loading, error } = useSelector(state => state.messages);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    dispatch(startMessagesListener());
  }, [dispatch]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      dispatch(sendMessage(newMessage));
      setNewMessage('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Mensajes</h2>

      {loading && <p>Cargando mensajes...</p>}
      {error && <p className="text-red-500">Hubo un error: {error}</p>}

      <ul className="mt-4 space-y-2">
        {messages.map((message) => (
          <li key={message.id} className="border p-2  text-white">
            <span className=' text-white'>{message.text}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSendMessage} className="mt-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 w-full  text-white"
          placeholder="Escribe un mensaje..."
        />
        <button type="submit" className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}
