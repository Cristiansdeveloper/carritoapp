import React from "react";
import Header from "../components/header";
import '../stylesheets/styles.css';
import ArticuloEnCarro from "../components/articuloencarro";
import { Link } from "react-router-dom";




function Carro() {

  const data = JSON.parse(window.sessionStorage.getItem("carrito"));

   
  function pintarArticulos() {
    var divs = [];
    if (Array.isArray(data)) {
      data.forEach(obj => {
        divs.push(
          <ArticuloEnCarro precio={obj.precio} nombre={obj.nombre} cantidad={obj.cantidad}/>
       )
      });
    }
    return divs;
  }

  function pintarCalculoTotal() {
    var total = 0;
    if (Array.isArray(data)) {
      data.forEach(obj => {
        total= total + obj.cantidad*obj.precio;
      });
    }
    return total.toFixed(2);
  }

  function calcularIVA21() {
    
    var totaliva = 0;
    if (Array.isArray(data)) {
      data.forEach(obj => {
        totaliva=obj.cantidad*obj.precio*0.21;
      });
    }
    return totaliva.toFixed(2);
  }

  function calcularTotalConIVA() {
    var totalconiva = 0;
    if (Array.isArray(data)) {
      data.forEach(obj => {
        totalconiva=obj.cantidad*obj.precio*1.21;
      });
    }
    return totalconiva.toFixed(2);
  }




  return (

    <div className="todo-carro">
      <Header />

      <div className="contenedor-carrito">
      <Link to="/">
      <h3 className="titulo-carrito">Seguir comprando</h3>
      </Link>
      <h3 className="titulo-carrito">Tu compra:</h3>

      <div className="contenedor-carro">
     <div className="contenedor-lateral"></div>
        <div className="articulos-en-carro">
          <div>
          
            <p>{pintarArticulos()}</p>

          </div>

        </div>
     

      <div className="precio-carro">
        <h3 className="titulo-total">Total:</h3>
        <p>Importe: {pintarCalculoTotal()} EUR</p>
        <p>IVA: {calcularIVA21()}</p>
        <p>Total: {calcularTotalConIVA()} EUR </p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Carro;