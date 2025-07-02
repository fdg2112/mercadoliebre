import Layout from "../components/Layout/Layout";
import "../styles/Register.css";

const Register = () => {
  return (
        <Layout>
          <form className="register-form">
              <h2 className="register-title">Completá con tus datos y Registrate</h2>
              <div className="register-form-group">
                  <label htmlFor="name">Nombre:</label>
                  <input type="text" id="name" name="name" required />
              </div>
              <div className="register-form-group">
                  <label htmlFor="surname">Apellido:</label>
                  <input type="text" id="surname" name="surname" required />
              </div>
              <div className="register-form-group">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input type="email" id="email" name="email" required />
              </div>
              <div className="register-form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className="register-button">Registrarse</button>
          </form>
        </Layout>
  );
}

export default Register;