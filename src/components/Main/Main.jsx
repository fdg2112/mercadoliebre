import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      const data = await response.json();
      setProducts(data);
    }
    catch (error) {
      setError("Ups! No se pudo cargar los productos. Algo falló, aquí el detalle: " + error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="main">
        <div className="main-header banner">
          <img src="/src/assets/img1.jpg" alt="banner" />
        </div>
        <div className="main-content">
          {error && <p className="error">{error}</p>}
          {products.length > 0 ? (
            <ul className="product-list">
              {products.map(product => (
                <li key={product.id} className="product-item">
                  <div className="product-img-container">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <h2>{product.title}</h2>
                  <p>Precio: ${product.price}</p>
                  <div className="card-buttons">
                    <button className="add-to-cart">Añadir al carrito</button>
                    <Link to={`/products/${product.id}`} className="view-details">
                      Ver detalles
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
    </main>
  );
}

export default Main;