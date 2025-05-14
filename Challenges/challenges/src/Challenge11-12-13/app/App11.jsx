import Home from "../pages/Home";
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Logout from '../components/Logout';
import PrivateRoute from '../components/PrivateRoute';

function App11() {
return (
    <Provider store={store}>
      <BrowserRouter>
        <Logout />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          {/* Ruta por defecto, redirige a /login si algo no coincide */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App11;
