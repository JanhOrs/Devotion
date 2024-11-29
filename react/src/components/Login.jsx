import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../servicios/usarios.servicio';
import "./login.css";

const Login = () => {

  const { login } = useAuth();
  
  const [mensaje, setMensaje] = useState("")
  // Definimos el estado para cada campo del formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",

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
      correo_usuario: formData.username,
      clave_usuario: formData.password,
    }
    //login(objetoEnviar);
    console.log(" objetoEnviar " + JSON.stringify(objetoEnviar))
    loginUser(objetoEnviar).then((response) => {
      console.log(" * response *    " + JSON.stringify(response.data))
      if (response.data.status) {
        setMensaje("")
        login(response.data.datos[0])

      }else {
        setMensaje("Datos errados ")
      }
    })
      .catch((error) => {
        console.log("Error leer Error al tratar de hacer el login  " + error)
        setMensaje("Error el servidor ")
      })

  };

  return (
    <div className="container-All">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite su Usuario" required
              onChange={handleChange}
              value={formData.username} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite su Constrasela" required
              onChange={handleChange}
              value={formData.password} />
          </div>
          <p className="text_error"> {mensaje} </p>
          <button type="submit" className="login-btn">Login</button>
          <p className="register-text">No Estas Registrado ?  <Link to="/register">Registrate</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

