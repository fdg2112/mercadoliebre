import Layout from "../components/Layout/Layout";
import "../styles/Register.css";

const Register = () => {
  return (
    <register className="register">
        <Layout>
          <h2 className="register-title">Registrarse</h2>
          <form className="register-form">
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
    </register>
  );
}

export default Register;