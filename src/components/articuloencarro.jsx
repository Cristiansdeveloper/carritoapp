
import '../stylesheets/styles.css';
import trecking from "../images/calzado_trecking.jpg";
import camisetanegra from "../images/cam_negra.jpg";
import calzadorosa from "../images/calzado_deportivo_rosa.jpg";
import transpirable from "../images/camiseta transpirable.jpg";
import cuerda from "../images/cuerda_salto.jpg";
import calzadoverde from "../images/zapatillas_verdes.jpg";
import calzadocomodo from "../images/calzado_comodo.jpg";

function ArticuloEnCarro({ precio, nombre, cantidad}) {

    function seleccionarImagen(){
        console.log();
        switch(nombre){
          case "Camiseta Negra":
            console.log("entra");
            return camisetanegra;

          case "Calzado Cómodo":
            return calzadocomodo;

          case "Calzado estilo Trecking":
            return trecking;

          case "Calzado deportivo rosa":
            return calzadorosa;

          case "Camiseta transpirable":
            return transpirable;

          case "Cuerda de salto":
            return cuerda;

          case "Zaptillas de deporte verdes":
            return calzadoverde;
    
        }
    }



    return (
        <div className="contenedor-artcar">
            <div className="imgnomypr">
                
                <img src={seleccionarImagen()} alt="camiseta negra básica"></img>
                <h3>{cantidad}x {nombre}</h3>
                <h4>Precio unitario: {precio}€</h4>
                <h4>Cant.: {cantidad}</h4>
            </div>
           
        </div>
        
    );

}

export default ArticuloEnCarro;