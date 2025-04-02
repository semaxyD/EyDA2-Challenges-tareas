import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username.trim()){
            setError("⚠️ Please enter a username!");
            return;
        }

        login(username);
        navigate("/dashboard");
    };


    return (
        <div>
            <h2>Login Page</h2>
            <input 
                type="text" 
                placeholder="Enter your name to login" 
                value={username} 
                onChange= { (e) => 
                {
                setUsername(e.target.value);
                setError("")
                } }
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
