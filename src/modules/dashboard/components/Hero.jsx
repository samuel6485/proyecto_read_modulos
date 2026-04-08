import React from 'react';
import './Hero.css';

const Hero = ({ user, onUpdate }) => {
    return (
        <div className="hero-container">
            <h1 className="hero-title">Bienvenido a tu Perfil de Belleza, <b>{user.username}!</b></h1>
            <p className="hero-subtitle">Aquí está tu información personal para recomendaciones personalizadas:</p>
            
            <div className="hero-info-card">
                <p className="info-item"><strong>Email:</strong> {user.email}</p>
                <p className="info-item"><strong>Teléfono:</strong> {user.telefono}</p>
                <p className="info-item"><strong>Fecha de Nacimiento:</strong> {new Date(user.fechaNacimiento).toLocaleDateString()}</p>
            </div>

            <button 
                onClick={onUpdate}
                className="update-button"
            >
                Actualizar Información
            </button>
        </div>
    );
};

export default Hero;
