import React from "react";
import headercss from "./Header.css";
import {Link} from "react-router-dom"
import Buscador from "../Buscador/Buscador";


function Header (){
    return(
        <header>
    <section className = "headerIzquierda">
        
        <img className="logo" src='/img/logo.jpg' alt="Logo Empresa"/>
        <a href="/" className="nombrepagina"><h2 className="nombrepagina">FILMEX</h2></a>
    </section>


    <nav className="headerDerecha">
        <article className="seccionesHeader"> 
        <Link to="/" className="headerLinks">Home</Link>    
        <Link to="/movies" className="headerLinks">Ver todas las Peliculas</Link>
        <Link to="/series" className="headerLinks">Ver todas las Series</Link>
        <Link to="/favoritos" className="headerLinks">Tus Favoritos</Link>

        </article>

        {/* <form className="form" action="./searchResults" method="get">
            <input className="input" type="text" name="buscar" id="" placeholder="Buscar..."/>
            <button className="boton" type="submit"><CgSearch style={{color: 'black'}}/></button>
        </form> */}
    </nav>
</header>
    )
}

export default Header;