import Layout from "../components/Layout/Layout";
import "../styles/Login.css";

const Login = () => {
  return (
        <Layout>
          <div className="login-container">
            <div className="login-info">
              <h2 className="login-title">Ingresá tu e-mail o teléfono para iniciar sesión</h2>
            </div>
            <div className="login-form-col">
              <form className="login-form">
                <div className="login-form-group">
                  <label htmlFor="email">E-mail o teléfono</label>
                  <input type="text" id="email" name="email" required />
                </div>
                <button type="submit" className="btn-primary">Continuar</button>
                <button type="button" className="btn-secondary">Crear cuenta</button>
              </form>
              <div className="login-divider"><span>o</span></div>
              <button type="button" className="btn-google">
                <img src="/src/assets/google-icon.png" alt="" />  
                Iniciar sesión con Google
              </button>
            </div>
          </div>
        </Layout>
  );
}

export default Login;