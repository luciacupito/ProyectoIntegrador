import React, {Component} from "react";
import {Link} from "react-router-dom";
import EachCss from "./Each.css";

class Each extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoBotonDesc: "Ver Mas",
            heart: 'Agregar a favoritos',
            gitfavoritos: [],
            descOculta: true,
        }
    }

    componentDidMount(){
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
        
        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

        if(arrayFavoritos.includes(this.props.id)){
            this.setState({
                heart: 'Quitar de favoritos'
             })
           }     
        }

    }

    agregarAFavoritos(id){
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

        if(arrayFavoritos.includes(this.props.id)){
            //Si está el id en el array, sacarlo
            arrayFavoritos = arrayFavoritos.filter(unId => unId !== this.props.id);
            this.setState ({
                heart:'Agregar a favoritos'
            })
        }else{
            arrayFavoritos.push(this.props.id);
            this.setState({
                heart: 'Quitar de favoritos'
        })
        }
    }
    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)
    console.log(localStorage)
    
}

    mostrarDesc(){
        console.log('click');
        if (this.state.descOculta == true) {
            this.setState({
                descOculta: false,
                textoBotonDesc: "Ver Menos"
            }) 
        } else {
            this.setState({
                descOculta: true,
                textoBotonDesc: "Ver Mas"
            })
        }
       
    }

    render(){
    return(
        <article className="articuloEach">
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`}  alt={this.props.title} className="portada"/>
        <p className="nombre">{this.props.title}</p>   
        
        <div className="boton">
            {this.props.esPeli?<Link className="botontext" to= {`./detPeli/${this.props.id}`}>Ir a detalle</Link>:<Link className="botontext" to= {`./detSerie/${this.props.id}`}>Ir a Detalle</Link>}
{/*         </button>

        <button className="boton"> */}
        <button onClick={()=>this.mostrarDesc()} className='botontext' type="button">{ this.state.textoBotonDesc}</button>
        <button onClick={()=>this.agregarAFavoritos(this.props.id)} className='botonlike' type="button"> { this.state.heart }</button>
        </div>
        <p className={this.state.descOculta ? 'ocultar':'ver' }>{this.props.description}</p>
        
        </article>
    )
    }
}

export default Each;