import React, {useState} from "react";
import '../stylesheets/styles.css';

function Articulo({ precio, nombre, cantidad, gestionarIntroduccion, imagen}) {

    const [inputValue, setInputValue] = useState(0);
    console.log("el valor es " + {cantidad});
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    return (
        <div className="contenedor-articulo">
            <div className="imgnomypr">
                <img src={imagen} alt="camiseta negra básica"></img>
                <h3>{nombre}</h3>
                <h4>{precio}€</h4>
            </div>
            <div className="inputart">
                <input className="input-cantidad" onChange={handleInputChange} type="number" id="cant" defaultValue={cantidad} min="0" max="99"/>
                
                <button id="btnmeter" className="btncompra" onClick={ () => gestionarIntroduccion(nombre, inputValue,precio, document.getElementById("btnmeter"))}>Actualizar carro</button>
            </div>
        </div>
        
    );

}

export default Articulo;