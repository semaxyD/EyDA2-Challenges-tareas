import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailPassword, loginWithGoogle } from '../auth/authThunks';
import { use, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithEmailPassword({ email, password }));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  // Redirige cuando hay usuario logueado
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="p-6 max-w-md mx-auto bg-black rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded" type="submit" disabled={loading}>
          Login
        </button>
      </form>
      <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white py-2 rounded">
        Login con Google
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}