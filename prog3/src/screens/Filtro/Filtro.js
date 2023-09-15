// import React, { Component } from 'react';

// class Filtro extends Component{

//     constructor(props){
//         super(props );
//         this.state = {
//             valorIngresado: ''
//         }
//     }


//     controlEnvio(evento){
//         evento.preventDefault();
//         console.log('no mandaste nada')
//         return true
//     }

//     almacenarInput(eventoInput){
//         this.setState({
//             valorIngresado: eventoInput.target.value 
//         }, ()=> this.props.filtrar(this.state.valorIngresado))
//     }

//     render(){ 
//         return(
//             <form action="" method='GET' onSubmit={(evento) => this.controlEnvio(evento)}>
//                 <label htmlFor=''> Pelicula o Serie a filtrar </label>
//                 <input type='text' name='filtro' onChange={(eventoInput) => this.almacenarInput(eventoInput)} value={this.state.valorIngresado}></input>
//                 <button type='submit'> Buscar </button>
//             </form>
//         )
//     }
 

// }



// export default Filtro

import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Filtro extends Component{

    constructor(props){
        super(props );
        this.state = {
            valorIngresado: ''
        }
    }


    controlEnvio(evento){
        evento.preventDefault();
        console.log('no mandaste nada')
        return true
    }

    almacenarInput(eventoInput){
        this.setState({
            valorIngresado: eventoInput.target.value 
        }, ()=> this.props.filtrar(this.state.valorIngresado))
        console.log(this.state.valorIngresado)
    }

    render(){ 
        return(
            <form action="" method='GET' onSubmit={(evento) => this.controlEnvio(evento)}>
                <input type='text' name='filtro' onChange={(eventoInput) => this.almacenarInput(eventoInput)} value={this.state.valorIngresado}></input>
                <Link to= {`/resultadoBusqueda/${this.state.valorIngresado}`} className="detalle"> <button type='submit'> Filtrar </button> </Link> 
            </form>
        )
    }
}



export default Filtro