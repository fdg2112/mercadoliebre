import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Dashboard.css";

const Dashboard = () => {

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
        <Layout>
        <div className="dashboard-container">
            <h1 className="dashboard-title">Bienvenido al Dashboard</h1>
            <p className="dashboard-description">Aquí podrás gestionar tus productos, ver estadísticas y mucho más.</p>
            {/* Add more dashboard content here */}
        </div>
        </Layout>
  );
}

export default Dashboard;