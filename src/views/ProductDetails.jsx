import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Error al obtener el producto");
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError("No se pudo cargar el producto. " + err.message);
    }
  };
  fetchProduct();
}, [id]);

  return (
    <section className="productDetails">
      <Layout>
        {error && <p>{error}</p>}
        {!product && !error && <p>Cargando producto...</p>}
        {product && (
          <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p><strong>Precio:</strong> ${product.price}</p>
            <p>{product.description}</p>
          </div>
        )}
      </Layout>
    </section>
  );
};

export default ProductDetails;
