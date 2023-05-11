import React from "react";
import '../stylesheets/styles.css';
import { Link } from "react-router-dom";
import carrito from "../images/carrito.png"

function Carrito({ articulosdentro }) {

    return (
        <div className="carrito">
            <Link to="/carrito" className="carrito">
                <img src={carrito} className="icono-carrito"/><h2>Carrito: {articulosdentro} </h2>
            </Link>
        </div>

    );
}

export default Carrito;