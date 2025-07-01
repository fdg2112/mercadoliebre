import Layout from "../components/Layout/Layout";
import "../styles/Login.css";

const Login = () => {
  return (
    <login className="login">
        <Layout>
          <h2 className="login-title">Iniciar Sesión</h2>
          <form className="login-form">
              <div className="login-form-group">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input type="email" id="email" name="email" required />
              </div>
              <div className="login-form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className="login-button">Iniciar Sesión</button>
          </form>
        </Layout>
    </login>
  );
}

export default Login;