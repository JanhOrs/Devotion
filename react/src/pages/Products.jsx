// src/App.js

import React, { useState } from 'react';
import './App.css'; // Para la parte de CSS

// Componente Header
const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img src="img/logo.png" alt="Devotion Logo" />
      </a>

      <ul className="navmenu">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="tienda.html">Tienda</a></li>
        <li>
          <a href="#">Productos</a>
          <ul className="Submenu">
            <li><a href="hombre.html">Ropa Hombre</a></li>
            <li><a href="mujer.html">Ropa Mujer</a></li>
            <li><a href="accesorios.html">Zapatos y Accesorios</a></li>
          </ul>
        </li>
        <li><a href="sobrenosotros.html">Sobre nosotros</a></li>
        <li><a href="contacto.html">Registro</a></li>
      </ul>
    </header>
  );
};

// Componente de Producto
const Product = ({ name, price, image, onAddToCart, onFavorite }) => {
  return (
    <div className="row">
      <img src={image} alt={name} />
      <div className="product-text">
        <h5>Oferta</h5>
      </div>
      <div className="heart-icon" onClick={onFavorite}>
        <i className="bx bx-heart"></i>
      </div>
      <div className="rating">
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star-half"></i>
      </div>
      <div className="price">
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
      <button onClick={() => onAddToCart(name, price, image)}>Agregar al Carrito</button>
    </div>
  );
};

// Componente de la Sección de Productos
const ProductsSection = ({ onAddToCart, onFavorite }) => {
  const products = [
    { name: 'Blazer para hombre', price: '$135.000', image: 'img/19.jpg' },
    { name: 'Camiseta minimalist', price: '$48.000', image: 'img/20.jpg' },
    { name: 'Camisa manga larga', price: '$65.000', image: 'img/21.jpg' },
    { name: 'Camiseta tipo polo', price: '$58.000', image: 'img/22.jpg' },
    { name: 'Chaqueta cazadora paño', price: '$98.000', image: 'img/23.jpg' },
    { name: 'Camisa seda fria', price: '$58.000', image: 'img/24.jpg' },
    { name: 'Gaban en paño Hombre', price: '$150.000', image: 'img/7.jpg' },
    { name: 'Hoddie Hombre', price: '$70.000', image: 'img/8.jpg' },
    { name: 'Sudadera Hombre', price: '$160.000', image: 'img/25.jpg' },
    { name: 'Chaqueta Clasica cuerotex', price: '$135.000', image: 'img/9.jpg' },
    { name: 'Camisa manga corta', price: '$55.000', image: 'img/11.jpg' },
    { name: 'Camiseta básica', price: '$37.000', image: 'img/12.jpg' },
  ];

  return (
    <section className="trending-product" id="trending">
      <div className="center-text">
        <h2>Productos de<span> Hombre</span></h2>
      </div>

      <div className="products">
        {products.map((product, index) => (
          <Product 
            key={index} 
            name={product.name} 
            price={product.price} 
            image={product.image} 
            onAddToCart={onAddToCart} 
            onFavorite={onFavorite} 
          />
        ))}
      </div>
    </section>
  );
};

// Componente Contacto
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-info">
        <div className="first-info">
          <img src="img/logo.png" alt="Devotion Logo" />
          <p> Calle 1b #52b-29, <br /> La Ponderosa, Bogota D.C</p>
          <p>+57 3205185464</p>
          <p>Devotionbygod_05@gmail.com</p>
        </div>
        <div className="social-icon">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="https://www.instagram.com/devotionoficial/profilecard/?igsh=MTdiaWhwMWk3cHhwNA==">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="https://wa.me/message/ORIAPYJLW7ZMP1?src=qr"><i className='bx bxl-whatsapp'></i></a>
        </div>
      </div>
    </section>
  );
};

// Componente Principal App
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price, image) => {
    setCart([...cart, { name, price, image }]);
  };

  const toggleFavorite = (name, price, image) => {
    // Aquí podrías agregar lógica para manejar favoritos, por ejemplo, un "toggle" entre agregado y no agregado
    console.log(`Favorito: ${name}, ${price}`);
  };

  return (
    <div>
      <Header />
      <ProductsSection onAddToCart={addToCart} onFavorite={toggleFavorite} />
      <Contact />
      <footer>
        <p>Copyright © @2024. Todos los derechos reservados a Devotion By God</p>
      </footer>
    </div>
  );
};

export default App;
