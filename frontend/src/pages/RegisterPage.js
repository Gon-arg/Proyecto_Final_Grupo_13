import { useState } from "react";
import { register as registerService } from "../services/authService";

function RegisterPage() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await registerService({ nombre, email, password });
        alert("Registro exitoso, ahora podés iniciar sesión");
        } catch (err) {
        setError("No se pudo completar el registro");
        }
    };
    return (
    <form onSubmit={handleSubmit}>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
        <button type="submit">Registrarme</button>
        {error && <p>{error}</p>}
        </form>
);
}
export default RegisterPage;