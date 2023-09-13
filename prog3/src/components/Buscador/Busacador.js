import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state={
            busqueda: "",
            resultados: []
        }
    }
    prevernir(e){
        e.preventDefault()
    }
    buscar(e){
        this.setState(
            {
                busqueda: e.target.value
            }
        )
    }
    render(){
        return(
            <div className="buscador">
            <form className="lupita" onSubmit={(e)=> this.prevernir(e)}>
                <input className="lupita" type="text" name="busqueda" placeholder="¿Qué quiere ver?" onChange={(e)=>this.buscar(e)} value= {this.state.busqueda}/>
               <Link to={`/busqueda/${this.state.busqueda}`}> 
               <button type="submit" className="boton busq">Buscar</button></Link>
            </form> 
            </div>
        )
    }
    
}
export default Buscador;
