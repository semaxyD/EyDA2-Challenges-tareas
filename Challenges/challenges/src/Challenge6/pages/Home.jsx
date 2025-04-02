import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return( 
    <div>
        <h1>Welcome to Home</h1>
        <p>This is the public Home page.</p>

        {user ? (
            <button onClick={() => navigate("/dashboard")}>
                Go to Dashboard
            </button>
        ) : (
            <button onClick={() => navigate("/login")}>
                Login
            </button>
        )}
    </div>
    );
};