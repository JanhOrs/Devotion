import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setuser } from "../servicios/usarios.servicio.js";

import "./register.css";

const Register = () => {
    
    const [textColor, setTestColor] = useState("")
    const [mensaje, setMensaje] = useState("")
    // Definimos el estado para cada campo del formulario
    const [formData, setFormData] = useState({
        userid: "",
        name: "",
        email: "",
        password: ""
    });

    // Manejador de cambios en los campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let objetoEnviar = {
            "id_usuario": formData.userid,
            "nombre_usuario": formData.name,
            "correo_usuario": formData.email,
            "clave_usuario": formData.password

        }
        //login(objetoEnviar);
        console.log(" objetoEnviar " + JSON.stringify(objetoEnviar))
        /
        setuser(objetoEnviar).then((response) => {
            console.log(" * response *    " + JSON.stringify(response.data))
            if (response.data.status) 
                setTestColor("text_ok")
                else
                setTestColor("text_error")

                setMensaje(response.data.message)
        })
            .catch((error) => {
                console.log("Error leer Error al tratar de hacer el login  " + error)
                setTestColor("text_error")
                setMensaje("Error el servidor ")
            })
            
    };

    return (
        <div className="container-All">
            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>Registro de Usuario</h2>
                    <div className="form-group">
                        <label htmlFor="userid">Usuario ID</label>
                        <input 
                        type="text" 
                        id="userid" 
                        name="userid" 
                        placeholder="Digite su  ID" required
                        onChange={handleChange}
                        value={formData.userid} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre Completo</label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite su nombre" required 
                        onChange={handleChange}
                        value={formData.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Digite su correo" required
                        onChange={handleChange}
                        value={formData.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Crea tu clave" required 
                        onChange={handleChange}
                        value={formData.password} />
                    </div>
                    <p className={textColor}> {mensaje} </p>
                    <button type="submit" className="register-btn">Registrate</button>
                    <p className="login-text">Ya tienes usuario creado? <Link to="/login">Login</Link>  </p>
                </form>
            </div>
        </div>
    )
};

export default Register;
