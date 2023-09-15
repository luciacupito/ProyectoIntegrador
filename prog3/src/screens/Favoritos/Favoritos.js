import React, { Component } from "react";
import Favoritoscss from "../Favoritos/Favoritos.css"
import Each from "../../components/Each/Each";
import Block from "../../components/Block/Block";

class Favoritos extends Component{
    constructor(){
    super();
    this.state = {
        Pelis: [],
      };
    }

   recuperoStorage(){
    let favArray = localStorage.getItem('favoritos');
    let Array2 = JSON.parse(favArray);
    return Array2
   }

   componentDidMount(){
    console.log(this.recuperoStorage()) 
    const ArrayIds = this.recuperoStorage();
    ArrayIds.map((id) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          const Favs = this.state.Pelis;
          Favs.push(data);
          this.setState({ Pelis: Favs });
        })
        .catch((e) => console.log(e));
    });
  }
    
    
    render(){
       
        return(
            <div>
            <h1>My favorites</h1>
                <main>
                    {this.state.Pelis.length > 0 ? (
                    <Block PelisArray={this.state.Pelis}/>) 
                    : (<h2>No favorites</h2>)}
                </main>                
            </div>

        )
    }
}

export default Favoritos;