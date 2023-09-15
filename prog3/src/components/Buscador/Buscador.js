import React, { Component } from "react";
import { Link } from 'react-router-dom';
import BuscadorCss from "./Buscador.css"

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state={
            busqueda: "",
            resultados: []
        }
    }
    prevent(p){
        p.preventDefault()
    }
    search(p){
        this.setState(
            {
                busqueda: p.target.value
            }
        )
    }
    render(){
        return(
            <div className="divbuscador">
            <form className="formbuscador" onSubmit={(p)=> this.prevent(p)}>
                <input className="inputbuscador" type="text" name="busqueda" placeholder="¿Qué quiere ver?" onChange={(p)=>this.search(p)} value= {this.state.busqueda}/>
               <Link to={`/searchResults/${this.state.busqueda}`}> 
               <button type="submit" className="botonbuscador"><i class="fa-solid fa-magnifying-glass"></i>Buscar</button></Link>
            </form> 
            </div>
        )
    }
    
}
export default Buscador;


