import { useState, useEffect } from "react";
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
      setError("No se pudo cargar los productos. Detalle: " + error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="main">
        <div className="main-header">
          <h1>Productos</h1>
        </div>
        <div className="main-content">
          {error && <p className="error">{error}</p>}
          {products.length > 0 ? (
            <ul className="product-list">
              {products.map(product => (
                <li className="product-item">
                  <h2>{product.title}</h2>
                  <p>Precio: ${product.price}</p>
                  <img src={product.image} alt={product.title} />
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