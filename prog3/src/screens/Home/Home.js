import React, { Component } from "react";
import Block from "../../components/Block/Block.js";
import homecss from "../Home/Home.css"
import Buscador from "../../components/Buscador/Buscador.js";

class Home extends Component{
    render(){
        return(
        <div className="main">
                <Buscador/>
        <h3 className="titulo">Popular Movies</h3>
        <Block esPeli={true} url="https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1"/>
        <h3 className="titulo">Popular Series</h3>
        <Block esPeli={false} url='https://api.themoviedb.org/3/tv/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>
        <h3 className="titulo">Most watched Series</h3>
        <Block esPeli={false} url='https://api.themoviedb.org/3/tv/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'/>
        </div>
        )
    }
}

export default Home;