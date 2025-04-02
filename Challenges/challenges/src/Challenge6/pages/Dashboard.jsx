import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user?.username}!</p>

            <button onClick={() => navigate("/")}>Go to Home</button>

            <button
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};