import React, { Component } from "react";
import Favoritoscss from "../Favoritos/Favoritos.css"
import Each from "../../components/Each/Each";


class Favoritos extends Component { 
  constructor(props) {
      super (props)
      this.state = {
          arrayFavoritos : []
      }
  }

  componentDidMount(){
      let favoritos = [];
      let recuperarStorage = localStorage.getItem('favoritos')
      if (recuperarStorage !== null){
          favoritos = JSON.parse(recuperarStorage)
      }
      favoritos.map((id)=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`)
          .then((response)=>response.json())
          .then((arrayFavoritos) =>{
              let listaFavs = this.state.arrayFavoritos;
              listaFavs.push(arrayFavoritos);
              this.setState({arrayFavoritos: listaFavs})
          })
          .catch((error)=>console.log(error))

      return true
      })

  }

  render(){
      return(
          <React.Fragment>
              <h1>Tus Favoritos</h1>
              <div className="block">
                  {this.state.arrayFavoritos.map((Obj) => <Each title={ this.props.esPeli ? Obj.title : Obj.name} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} esPeli={this.props.esPeli?true:false}/> )}
              </div>
          </React.Fragment>
      )
  }
}

export default Favoritos; 

