import { Link } from "react-router-dom";
import "./Header.css";
import logoMl from "../../assets/logo-ml.png";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";

const Header = () => {
  const { userData } = useContext(UserContext);

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
          {userData ? (
            userData.role === "cliente" ? (
              <>
                <li className="header-menu-item"><Link to="/perfil">🚹 Perfil</Link></li>
                <li className="header-menu-item"><Link to="/carrito">🛒 Carrito</Link></li>
                <li onClick={() => signOut(auth)}>Cerrar Sesión</li>
              </>
            ) : (
              <>
                <li className="header-menu-item"><Link to="/dashboard">📊 Dashboard</Link></li>
                <li onClick={() => signOut(auth)}>Cerrar Sesión</li>
              </>
            )
          ) : (
            <>
              <li className="header-menu-item"><Link to="/login">Iniciar Sesión</Link></li>
              <li className="header-menu-item"><Link to="/register">Registrarse</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
