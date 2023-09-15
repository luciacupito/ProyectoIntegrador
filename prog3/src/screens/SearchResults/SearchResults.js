import React, { Component } from "react";
import Each from "../../components/Each/Each";
import SearchResultscss from "./SearchResults.css";

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

            <h1 className="titulo"> Resultado de busqueda </h1>
            <React.Fragment>

        
            </React.Fragment>
            {
                this.state.resultados.length !== 0 ?
                    <React.Fragment>
            
                        <section >
                            <div className="block" >
                         {this.state.resultados.map((Obj) => <Each title={ this.props.esPeli ? Obj.title : Obj.name} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} esPeli={this.props.esPeli?true:false}/> )}
                            </div>
                        </section>
                
                    </React.Fragment>
                    : <>
                        <React.Fragment>
                            <h1> No hay resultados en tu busqueda: {this.props.match.params.search} </h1>
                        </React.Fragment>
                    </>
                   
            }
          
        </React.Fragment>
      
        )
    }
    
}
export default SearchResults;

