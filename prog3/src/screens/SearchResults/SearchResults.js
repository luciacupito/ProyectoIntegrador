import React, { Component } from "react";
import Pelis from "../OnlyMovies/OnlyMovies";

class SearchResults extends Component{
    constructor(){
        super()
        this.state={
           resultados: []
    }
   
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.search}&api_key=75196a6b12119e0621f7373e3de1a94a`)
            .then( res => res.json())
            .then(data=> this.setState({
                resultados: data.results,
            }))
            .catch()

      
    };

    render(){
        return(
        <React.Fragment>
            {
            this.state.resultados.length > 0 ?
        <section className="contenedor">

        <button role="boton" id="flecha" className="flecha-izquierda"><i className="icon-angle-left"></i></button>
        <article className="contenedor-peliculas">
            <h2 className="titulo">Resultados de Peliculas</h2>
            <div className="galeria">
                {
                   this.state.resultados.map((movie, id)=> <Pelis key={movie + id} datosPop={movie}/>)}
                
               
    
            </div>
        </article>
        <button role="boton" id="flecha" className="flecha-derecha"><i className="icon-angle-right"></i></button>
        </section>:
         <h3>Loading...</h3>}
        
        </React.Fragment>
        )
    }
    
}
export default SearchResults;