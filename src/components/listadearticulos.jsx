import React, { useState, useEffect } from "react";
import Articulo from "./articulo";
import '../index.css';
import Carrito from "./carrito";
import trecking from "../images/calzado_trecking.jpg";
import camisetanegra from "../images/cam_negra.jpg";
import calzadorosa from "../images/calzado_deportivo_rosa.jpg";
import transpirable from "../images/camiseta transpirable.jpg";
import cuerda from "../images/cuerda_salto.jpg";
import calzadoverde from "../images/zapatillas_verdes.jpg";
import calzadocomodo from "../images/calzado_comodo.jpg";

function Listadearticulos() {

    const data = JSON.parse(window.sessionStorage.getItem("carrito"));
    const [articuloscar, setArticulosCar] = useState([]);

    const [artencar, setArtenCar] = useState(0);

    const actualizarArticulo = (nombre, cantidad) => {
        const articulosactualizados = articuloscar.map(art => {
            if (art.nombre === nombre) {
                art.cantidad = cantidad;
            }
            return art;
        })
        setArticulosCar(articulosactualizados);
    }

    const comprobarCantidad = (nombre) => {
        if (data === null) {
          return 0;
        }
        const articulo = data.find((articulo) => articulo.nombre === nombre);
        if (articulo) {
          console.log(`La cantidad de ${nombre} es: ${articulo.cantidad}`);
          return articulo.cantidad;
        }
        return 0;
      };
    
            
    const gestionarIntroduccion = (articulo, cantidad,precio) => {
        const nuevoArticulo = {
            nombre: articulo,
            cantidad: cantidad,
            precio: precio

        };

        const indice = articuloscar.findIndex(function (articuloactual) {
            return articuloactual.nombre == nuevoArticulo.nombre
        })

        if (indice != -1) {
            actualizarArticulo(nuevoArticulo.nombre, nuevoArticulo.cantidad);
            sessionStorage.setItem("carrito", JSON.stringify(articuloscar));

        }else{
        setArticulosCar([...articuloscar, nuevoArticulo]);
        

        }

    }

    if(data!==null){
        var cant = comprobarCantidad("camiseta negra");
        console.log("hola " + cant); 
    }

    useEffect(() => {
       
        const totalarticulos = articuloscar.reduce((totalsumado, articulo) => parseFloat(articulo.cantidad) + totalsumado, 0);
        setArtenCar(totalarticulos);
        window.sessionStorage.setItem("carrito", JSON.stringify(articuloscar));
        console.log(sessionStorage.getItem("carrito"));
   
    });

    return (
        
        <div className="contenedor-articulos">
            <div className="menu-superior">
                <Carrito articulosdentro={artencar} />
            </div>
            <div className="lista-articulos">
            <Articulo key = "1" precio="15" nombre="Camiseta Negra" imagen={camisetanegra} cantidad={comprobarCantidad("camiseta negra")} gestionarIntroduccion={gestionarIntroduccion} />
            <Articulo key = "2" precio="43.99" nombre="Calzado Cómodo" imagen={calzadocomodo} cantidad={comprobarCantidad("Calzado Cómodo")} gestionarIntroduccion={gestionarIntroduccion} />
            <Articulo key = "3" precio="79.99" nombre="Calzado estilo Trecking" imagen={trecking} cantidad={comprobarCantidad("Calzado estilo Trecking")} gestionarIntroduccion={gestionarIntroduccion} />
            <Articulo key = "4" precio="49.99" nombre="Calzado deportivo rosa" imagen={calzadorosa} cantidad={comprobarCantidad("Calzado deportivo rosa")} gestionarIntroduccion={gestionarIntroduccion} />
            <Articulo key = "5" precio="15.30" nombre="Camiseta transpirable" imagen={transpirable} cantidad={comprobarCantidad("Camiseta transpirable")} gestionarIntroduccion={gestionarIntroduccion} />
            <Articulo key = "6" precio="9.99" nombre="Cuerda de salto" imagen={cuerda} cantidad={comprobarCantidad("Cuerda de salto")} gestionarIntroduccion={gestionarIntroduccion} />
            <Articulo key = "7" precio="39.99" nombre="Zaptillas de deporte verdes" imagen={calzadoverde} cantidad={comprobarCantidad("Zaptillas de deporte verdes")} gestionarIntroduccion={gestionarIntroduccion} />
            
            </div>
        </div>
    );
}
export default Listadearticulos; 