import React, { useState, useEffect } from "react";
import { useNavigate, useParams }   from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../styles/ProductForm.css";
import { db } from "../config/Firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";


const ProductForm = () => {
  const { id }     = useParams();      // si id está definido, es edición
  const navigate   = useNavigate();
  const isEditing  = Boolean(id); // si hay id, estamos editando un producto
  const [error, setError] = useState(null);//
  const [form, setForm] = useState({ //encontré esta manera de inicializar el formulario más resumida
    title: "",
    price: "",
    description: "",
    image: "",
    category: ""
  });
  const productsRef = collection(db, "products");
  
  const createProduct = async (productData) => {
    try {
      const productRef = await addDoc(productsRef, productData);
      return productRef;
    } catch (error) {
      console.error("Error al crear el producto:", error);
      setError("Error al crear el producto");
    }
  };

  useEffect(() => {
    if (!isEditing) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("No se encontró el producto");
        return res.json();
      })
      .then(data => setForm({
        title:       data.title,
        price:       data.price,
        description: data.description,
        image:       data.image,
        category:    data.category,
        stock:       data.stock || 0,
        createAt: data.createAt || new Date().toISOString(),
        updatedAt: data.updatedAt || new Date().toISOString()
      }))
      .catch(e => setError(e.message));
  }, [id, isEditing]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);

    if (!form.title || !form.price || !form.category) {
      setError("Por favor completa todos los campos obligatorios");
      return;
    }

    if (isNaN(form.price) || parseFloat(form.price) <= 0) {
      setError("El precio debe ser un número positivo");
      return;
    }

    if (form.name.length < 3) {
      setError("El nombre del producto debe tener al menos 3 caracteres");
      return;
    }

    const url = isEditing
      ? `https://fakestoreapi.com/products/${id}`
      : `https://fakestoreapi.com/products`;

    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title:       form.title,
          price:       parseFloat(form.price),
          description: form.description,
          image:       form.image,
          category:    form.category
        })
      });
      if (!res.ok) throw new Error("Error al guardar el producto");
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <h2>{ isEditing ? "Editar producto" : "Agregar producto" }</h2>
        { loading && <p>Cargando...</p> }
        { error   && <p className="error-msg">{error}</p> }
        <form onSubmit={handleSubmit} className="product-form">
          <label> 
            Nombre
            <input name="title" value={form.title} onChange={handleChange} required />
          </label>
          <label>
            Precio
            <input name="price" type="number" step="0.01" value={form.price} onChange={handleChange} required />
          </label>
          <label>
            Categoría
            <input name="category" value={form.category} onChange={handleChange} required />
          </label>
          <label>
            Imagen (URL)
            <input name="image" value={form.image} onChange={handleChange} />
          </label>
          <label>
            Descripción
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} />
          </label>
          <button type="submit" disabled={loading}>
            { isEditing ? "Guardar cambios" : "Crear producto" }
          </button>
          <button type="button" className="cancel-btn" onClick={() => navigate("/dashboard")}>Cancelar</button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductForm;
