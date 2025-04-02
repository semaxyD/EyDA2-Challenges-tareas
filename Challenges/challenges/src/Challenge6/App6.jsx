import "./App6.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

const App6 = () => {
    const { user } = useContext(AuthContext);

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* Rutas privadas */}
                    <Route path="/dashboard" element={user?.username ? <Dashboard /> : <Navigate to="/login" />} />

                    {/* Ruta por defecto */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
    );
};

export default App6;