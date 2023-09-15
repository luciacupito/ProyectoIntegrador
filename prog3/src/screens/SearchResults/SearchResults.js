import React, { Component } from "react";
import OnlyMovies from "../OnlyMovies/OnlyMovies";

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
        <section>
            <h2 className="titulo">Resultados de Peliculas</h2>
            <div>
                {
                   this.state.resultados.map((movie, id)=> <OnlyMovies key={movie + id} datosPop={movie}/>)}
                
               
    
            </div>
        </section>:
         <h3>No results</h3>}
        
        </React.Fragment>
        )
    }
    
}
export default SearchResults;