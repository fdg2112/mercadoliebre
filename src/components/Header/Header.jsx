import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="header-nav">
          <Link to="/" className="header-logo">
            <img src="/src/assets/logo.png" alt="Logo Mercado Liebre" className="header-logo-image" />
          </Link>
          <Link to="/"><h1 className="header-title">Mercado Liebre</h1></Link>
          <ul className="header-menu">
            <li className="header-menu-item"><Link to="/login">Iniciar Sesión</Link></li>
            <li className="header-menu-item"><Link to="/register">Registrarse</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;