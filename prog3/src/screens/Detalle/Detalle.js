import React, { Component } from "react";
import Detail from "../../components/Detail/Detail";
import './Detalle.css';


class Detalle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detailMovie: []
        }
    }
    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=ac76fd343a62a48054382d87b2a93a32')
            .then(res => res.json())
            .then(data => this.setState({detailMovie: data}))
            .catch(e => console.log(e))
    }

    render() {
        return (
            <React.Fragment>
           <section class="info">
            <h1 class="titulo"></h1>
            <article class="bloque">
                {
                    <Detail poster_path={this.state.peliculaDet.poster_path} 
                            titulo={this.state.peliculaDet.name} 
                            fecha={this.state.peliculaDet.release_date} 
                            genero={"divertido"} 
                            duracion={"2:30hs"} 
                            calificacion={this.state.peliculaDet.vote_avarage} />
                }
            </article>
            </section>
    
            </React.Fragment>)
    }
}


export default Detalle; 