import React, { Component } from "react";
import DetailCss from "../Detail/Detail.css"

let imagen = "https://image.tmdb.org/t/p/w342"

class Detail extends Component{
    constructor(props){
        super(props)
       
        this.state = {
            id: this.props.match.params.id,
            heart: 'Agregar a favoritos',
            favoritos: [],
            detail : {},

        }
    }
    
    componentDidMount(){
        let FavArray = [];
        let recuperoStorage = localStorage.getItem('favoritos');
        if(recuperoStorage !== null){
            FavArray = JSON.parse(recuperoStorage);

        if(FavArray.includes(this.state.id)){
            this.setState({
                heart: 'Quitar de favoritos',
             })
           }     
        }

        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`)
            .then(response => response.json())
            .then( data => this.setState({
                detail: data
            }))
            .catch(e => console.log(e))
    }


    agregarAFavoritos(id){
        let FavArray = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if(recuperoStorage !== null){
            FavArray = JSON.parse(recuperoStorage);

        if(FavArray.includes(this.state.id)){
            FavArray = FavArray.filter(unId => unId !== this.state.id);
            this.setState ({
                heart: 'Agregar a favoritos',
            })
        }else{
            FavArray.push(this.state.id);
            this.setState({
                heart: 'Quitar de favoritos',
            })
        }
    }
    let Stringify = JSON.stringify(FavArray)
    localStorage.setItem('favoritos', Stringify)
    console.log(localStorage)
    
}
    render(){
        console.log(this.state.detail);
        return(
            
        <section className="section_detail">
           
        
            <article>
                <div> <img src= { imagen + `${this.state.detail.poster_path}`} className="portada" alt="Poster" id="foto_portada"/></div>

                <div>
                <p className="text" id="rating">Rating: {this.state.detail.vote_average}</p>
                <p className="text" id="releaseDate">Fecha de estreno: {this.state.detail.release_date}</p>
                <p className="text" id="duracion">Duracion: {this.state.detail.runtime} mins.</p>
                <p className="text" id="sinopsis">{this.state.detail.overview}</p>
                <button onClick={()=>this.agregarAFavoritos(this.props.id)} className='botonlike' type="button"> { this.state.heart }</button>
                </div>
            </article>
        </section>
    
        )
    }
}

export default Detail;