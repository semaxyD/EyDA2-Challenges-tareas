import { useSelector } from 'react-redux';
import Notes from '../components/Notes'
import Messages from '../components/messages';

export default function Home() {
  const { user } = useSelector((state) => state.auth);
  return (
      <div className="min-h-screen bg-black p-4">
        {user ? (
          <>
            <p>Hola, {user.email}</p>
            <Notes />
            <Messages/>
          </>
        ) : (
          <p>Bienvenido, por favor inicia sesión.</p>
        )}
      </div>
    );
}
