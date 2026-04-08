import React from 'react'
import './Home.css'

export const Footer = () => {
  return (
    <footer className="ecomoda-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="logo-text">DERMO<span>BEAUTY</span></h2>
          <p>La belleza no es cuestión de apariencia, es cuestión de cuidado y productos de calidad.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Categorías</h4>
            <ul>
              <li><a href="#facial">Cuidado Facial</a></li>
              <li><a href="#corporal">Cuidado Corporal</a></li>
              <li><a href="#cabello">Cuidado del Cabello</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#consejos">Consejos de Belleza</a></li>
              <li><a href="#ingredientes">Ingredientes Naturales</a></li>
              <li><a href="#rutinas">Rutinas Diarias</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Suscríbete a Nuestros Consejos</h4>
          <p>Recibe las últimas tendencias en cuidado de la piel.</p>
          <div className="input-group">
            <input type="email" placeholder="tu-correo@dermobeauty.com" />
            <button>OK</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 DermoBeauty. "Belleza que se siente."</p>
        <div className="social-icons">
          <span>🧴</span>
          <span>💄</span>
          <span>🌸</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;