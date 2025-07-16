// src/views/Dashboard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Error al obtener los productos");
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      setError("Ups! No se pudo cargar los productos. " + e.message);
    }
  };

  const handleAdd = () => {
    navigate("/dashboard/add");
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
      setProducts(products.filter((p) => p.id !== id));
    } catch (e) {
      setError("Error al eliminar producto. " + e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Bienvenido al Dashboard</h1>
        <p className="dashboard-description">
          Acá podés gestionar tus productos.
        </p>

        <button className="add-btn" onClick={handleAdd}>
          + Agregar producto
        </button>

        {error && <p className="error-message">{error}</p>}

        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>${p.price}</td>
                <td>{p.category}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(p.id)}>
                    Editar
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(p.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};


export default Dashboard;
