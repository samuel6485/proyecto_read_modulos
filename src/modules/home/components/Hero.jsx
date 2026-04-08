import React from 'react'
import './Home.css'

export const Hero = () => {
  return (
    <section className="betty-hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <span className="badge-ecomoda">Dermatológicamente Probado</span>
        <h1>¡Descubre nuestros <span className="text-green">productos dermocosméticos!</span></h1>
        <p>
          Únete a la comunidad de amantes del cuidado de la piel. Explora nuestra gama de productos 
          dermocosméticos de alta calidad, accede a consejos exclusivos de belleza y transforma tu rutina diaria. 
          <strong> ¡Cuida tu piel con nosotros!</strong>
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">Explorar Productos</button>
          <button className="btn-outline">Ver Consejos de Belleza</button>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-icon">🧴</div>
            <strong>+500</strong>
            <span>Productos</span>
          </div>
          <div className="stat-item">
            <div className="stat-icon">😊</div>
            <strong>10k+</strong>
            <span>Clientes Satisfechos</span>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🌿</div>
            <strong>100%</strong>
            <span>Naturales</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="product-showcase">
          <div className="product-image">
            {/* Placeholder para imagen de productos */}
            <div className="image-placeholder">🧴💄🌸</div>
          </div>
          <div className="glass-card-betty">
             <div className="agenda-icon">✨</div>
             <p>"La belleza comienza con el cuidado adecuado de la piel."</p>
          </div>
        </div>
      </div>
    </section>
  )
}