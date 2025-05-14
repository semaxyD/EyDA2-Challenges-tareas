import { useSelector } from 'react-redux';
import Notes from '../components/Notes'
import Messages from '../components/messages';

export default function Home() {
  const { user } = useSelector((state) => state.auth);
  return (
      <div className="p-6 text-center">
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
