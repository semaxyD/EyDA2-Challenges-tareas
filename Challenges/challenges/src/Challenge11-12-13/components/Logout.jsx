import { useDispatch, useSelector } from 'react-redux';
import { logoutFirebase } from '../auth/authThunks';

export default function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Mi App</h1>
      {user && (
        <button
          onClick={() => dispatch(logoutFirebase())}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      )}
    </nav>
  );
}