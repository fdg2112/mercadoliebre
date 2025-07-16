// src/views/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/Dashboard.css";

import { db } from "../config/Firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError]       = useState(null);
  const [loading, setLoading]   = useState(false);
  const navigate = useNavigate();

  // Referencia a la colección
  const productsCol = collection(db, "products");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(productsCol);
      const items = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setProducts(items);
    } catch (e) {
      console.error(e);
      setError("No se pudieron cargar los productos: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    navigate("/dashboard/add");
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro querés eliminar este producto?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts(products.filter(p => p.id !== id));
    } catch (e) {
      console.error(e);
      setError("Error al eliminar producto: " + e.message);
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

        {error   && <p className="error-message">{error}</p>}
        {loading && <p>Cargando productos...</p>}

        {!loading && (
          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.category}</td>
                  <td>${p.price}</td>
                  <td>{p.stock}</td>
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
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
