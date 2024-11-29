import React from 'react';
import "./home.css";

function App() {
  return (
    <div>
        <title>Devotion By God</title>
        
      <header>
        <a href="#" className="logo">
          <img src="/img/logo.png" alt="" />
        </a>

        <ul className="navmenu">
          <li><a href="#">Inicio</a></li>
          <li><a href="tienda.html">Tienda</a></li>
          <li>
            <a href="#">Productos</a>
            <ul className="Submenu">
              <li><a href="Products">Ropa Hombre</a></li>
              <li><a href="mujer.html">Ropa Mujer</a></li>
              <li><a href="#">Zapatos y Accesorios</a></li>
            </ul>
          </li>
          <li><a href="sobrenosotros.html">Sobre nosotros</a></li>
          <li><a href="contacto.html">registro</a></li>
        </ul>
        <div className="nav-icon">
          <a href="favoritos.html"><i className='bx bx-heart'></i></a>
          <a href="cuenta.html"><i className='bx bx-user'></i></a>
          <a href="carrito.html" id="cart-icon"><i className='bx bx-cart'></i></a>
          <div id="cart-container" className="cart-container">
            <h2>Carrito de Compras</h2>
            <div id="cart-items" className="cart-items"></div>
            <div className="cart-total">
              <h4>Total: $<span id="cart-total">0</span></h4>
            </div>
            <a href="carrito.html">
              <button id="purchase-button">Realizar Compra</button>
            </a>
          </div>
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>

      <section className="main-home">
        <div className="main-text">
          <h5>colección de octubre</h5>
          <h1>Nueva Colección <br /> Octubre 2024 </h1>
          <p>Viste con estilo y calidad</p>

          <a href="#" className="main-btn">Comprar ahora<i className='bx bx-right-arrow-alt'></i></a>
        </div>

        <div className="down-arrow">
          <a href="#trending" className="down"><i className='bx bx-down-arrow-alt'></i></a>
        </div>
      </section>

      <section className="container top-categories">
        <h2 className="heading-1">Categorias</h2>
        <div className="container-categories">
          <div className="card-category category-mujer">
            <p>Ropa Mujer</p>
            <span><a href="mujer.html" className="nav-link">Ver más</a></span>
          </div>

          <div className="card-category category-hombre">
            <p>Ropa Hombre</p>
            <span><a href="hombre.html" className="nav-link">Ver más</a></span>
          </div>

          <div className="card-category category-accesorios">
            <p>Accesorios y zapatos</p>
            <span><a href="accesorios.html" className="nav-link">Ver más</a></span>
          </div>
        </div>
      </section>

      <section className="trending-product" id="trending">
        <div className="center-text">
          <h2>Productos en<span> Tendencia</span></h2>
        </div>

        <div className="products">
          {/* Product Rows */}
          {[...Array(12)].map((_, index) => (
            <div key={index} className="row">
              <img src={`../img/${index + 1}.jpg`} alt="" />
              <div className="product-text">
                <h5>{index % 2 === 0 ? 'Oferta' : 'Nuevo'}</h5>
              </div>
              <div className="heart-icon">
                <i className='bx bx-heart'></i>
              </div>
              <div className="ratting">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star-half'></i>
              </div>
              <div className="price">
                <h4>Producto {index + 1}</h4>
                <p>$120.000</p>
              </div>
              <button>Agregar al Carrito</button>
            </div>
          ))}
        </div>
      </section>

      <section className="client-reviews">
        <div className="reviews">
          <h3>Comentarios de clientes</h3>
          <img src='img/f1.jpg'/>
          <p>¡Estoy encantada con mi compra! La ropa llegó en perfectas condiciones y el envío fue muy rápido...</p>
          <h2>Sofia Gonzales</h2>
          <p>Empresaria</p>
        </div>
      </section>

      <section className="Update-news">
        <div className="up-center-text">
          <h2>Actualizaciones</h2>
        </div>

        <div className="update-cart">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="cart">
              <img src={`img/bl-${index + 1}.jpg`} alt="" />
              <h5>{index === 0 ? '20 Oct 2024' : index === 1 ? '29 Sept 2024' : '01 Sept 2024'}</h5>
              <h4>{index === 0 ? '¿Ya viste la nueva colección de Octubre?' : index === 1 ? '¡Desde Septiembre se siente diciembre!' : '¿Los accesorios elevan tu outfit?'}</h4>
              <p>Contenido de la actualización...</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="contact-info">
          <div className="first-info">
            <img src="img/logo.png" alt="" />
            <p>Calle 1b #52b-29, <br /> La Ponderosa, Bogota D.C</p>
            <p>+57 3205185464</p>
            <p>Devotionbygod_05@gmail.com</p>

            <div className="social-icon">
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="https://www.instagram.com/devotionoficial/profilecard/?igsh=MTdiaWhwMWk3cHhwNA=="><i className='bx bxl-instagram'></i></a>
              <a href="https://wa.me/message/ORIAPYJLW7ZMP1?src=qr"><i className='bx bxl-whatsapp'></i></a>
            </div>
          </div>

          <div className="second-info">
            <h4>Soporte</h4>
            <a href="https://wa.me/message/ORIAPYJLW7ZMP1?src=qr"><p>Contactanos</p></a>
            <a href="sobrenosotros.html"><p>Sobre nosotros</p></a>
            <a href="tallas.html"><p>Guia de tallas</p></a>
            <a href="favoritos.html"><p>Favoritos</p></a>
          </div>

          <div className="third-info">
            <h4>Tienda</h4>
            <a href="hombre.html"><p>Seccion de Hombre</p></a>
            <a href="mujer.html"><p>Seccion de Mujer</p></a>
            <a href="accesorios.html"><p>Accesorios</p></a>
            <a href="accesorios.html"><p>Calzado</p></a>
          </div>
        </div>
      </section>
     <script src='/public/java.js'></script> 
    </div>
  );
}

export default App;
