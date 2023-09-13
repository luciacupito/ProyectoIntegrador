import React from "react";
import {Route , Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home"
import Detalle from "./screens/Detalle/Detalle";


function App() {
  return (
      <body>
        <Header/>
    <h1>My App in React</h1>
    <main>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/favoritos" component={Favoritos} /> */}
        <Route path="/detalle/:id" component={Detalle} />
        {/* <Route path="/popular" component={Popular} /> */}
        {/* <Route path="/upcoming" component={Upcoming} />
        <Route path="/busqueda/:search" component={Results} />
        <Route path= "" component={Error404} /> */}
    </Switch> 
    </main>
  <Footer/>
    </body>
  );
}

export default App;
