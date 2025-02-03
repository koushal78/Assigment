import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

const UseLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const Login = async ({ username, password }) => {
        if (!handleInputError({ username, password })) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (data.error) {
                alert(data.error);
                return;
            }

            // Store user data in localStorage
            localStorage.setItem("auth-user", JSON.stringify(data));
            setAuthUser(data);
            console.log("Login Success:", data);

        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, Login };
};

export default UseLogin;

// Input validation for login
const handleInputError = ({ username, password }) => {
    if (!username || !password) {
        alert("Please enter both username and password");
        return false;
    }
    if (password.length < 8) {
        alert("Password length must be at least 8 characters");
        return false;
    }
    return true;
};
