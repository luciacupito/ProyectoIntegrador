import React, { Component } from "react";
import Each from "../Each/Each";
import BlockCss from "./Block.css";

class Block extends Component{
    constructor(props){
        super(props);
        this.state = {
            PelisArray : [],
        }
    }
    componentDidMount(){
        let urlPelis = this.props.url
        fetch(urlPelis)
            .then(response => response.json())
            .then( data => this.setState({
                PelisArray: data.results,
            }))
            .catch(e => console.log(e))
    }
    render(){
    return(
        <section className="block">
        
        {
            this.state.PelisArray.map((Obj, i)=>{
                console.log(this.state);
                if (i<5) {                     // Con esta línea llevamos solo 5 peliculas y no las 20 que guardamos en this.state
                    return( <Each title={ this.props.esPeli ? Obj.title : Obj.name} poster={Obj.poster_path} description={Obj.overview} id={Obj.id} esPeli={this.props.esPeli?true:false}/> )
                } else{ return (null)}     
            })
        }
        </section>
    )}
    }
    
export default Block;
