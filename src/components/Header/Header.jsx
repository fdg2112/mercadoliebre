import { Link } from "react-router-dom";
import "./Header.css";
import logoMl from "../../assets/logo-ml.png";

const Header = () => {
  return (
      <header className="header">
          <nav className="header-nav">
            <Link to="/" className="header-logo">
              <img src={logoMl} alt="Logo Mercado Liebre" className="header-logo-image" />
            </Link>
          <div className="header-search">
            <input type="text" placeholder="Buscar productos..." className="header-search-input" />
            <button className="header-search-button">🔍</button>
          </div>
          <ul className="header-menu">
            <li className="header-menu-item"><Link to="/login">Iniciar Sesión</Link></li>
            <li className="header-menu-item"><Link to="/register">Registrarse</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;