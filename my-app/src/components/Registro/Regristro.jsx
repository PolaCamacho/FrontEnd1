import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registro.css";
import logo from "../../images/logodeGuardianesdelEntorno.png";

function Registro() { 
  const [usuario, setUsuario] = useState(""); // Estado para el usuario
  const [email, setEmail] = useState(""); // Estado para el email
  const [contrasenia, setContrasenia] = useState(""); // Estado para la contraseña
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje de éxito

  // Manejo de cambios en los inputs
  const CambioValorUsuario = (evento) => {
    setUsuario(evento.target.value);
  };

  const CambioValorEmail = (evento) => {
    setEmail(evento.target.value);
  };

  const CambioValorContrasenia = (evento) => {
    setContrasenia(evento.target.value);
  };

  // Manejo del formulario
  const handleSubmit = (evento) => {
    evento.preventDefault();
    setMensaje(`El usuario fue registrado con éxito: ${usuario}`);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-lg">
            <img
              className="Logo"
              id="logo"
              src={logo}
              alt="Logo de Guardianes del Entorno"
              aria-label="Logo de Guardianes del Entorno"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">PÁGINA PRINCIPAL</Link>
                <Link className="nav-link highlight" to="/registro">INICIO</Link>
                <Link className="nav-link highlight" to="/registro">REGISTRO</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Formulario de Registro */}
      <div className="container mt-4">
        <div className="card" style={{ maxWidth: "500px", margin: "auto" }}>
          <div className="card-body">
            <h5 className="card-title text-center">REGISTRO</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="usuario" className="form-label">Usuario:</label>
                <input
                  type="text"
                  id="usuario"
                  className="form-control"
                  value={usuario}
                  onChange={CambioValorUsuario}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={CambioValorEmail}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contrasenia" className="form-label">Contraseña:</label>
                <input
                  type="password"
                  id="contrasenia"
                  className="form-control"
                  value={contrasenia}
                  onChange={CambioValorContrasenia} 
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">Registrarse</button>
            </form>

            {/* Mensaje de confirmación */}
            {mensaje && <p className="mensaje-exito mt-3 text-center">{mensaje}</p>}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <p>&copy; 2025 Guardianes del Entorno. Todos los derechos reservados.</p>
            <div className="footer-links">
              <p>ABOUT US</p>
              <p>DELIVERY INFORMATION</p>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
            <div className="redes-icons">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Registro;


