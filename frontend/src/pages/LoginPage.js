import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error } = useAuth();

    const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
};
return (
    <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
        {error && <p>{error}</p>}
        </form>
    );
}
export default LoginPage;