/* import { BrowserRouter as Route } from 'react-router-dom';
import {BrowserRouter, Link, Switch} from 'react-router-dom' */
/* import { Switch, Route } from 'react-router-dom';
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppCss from "../src/App.css"
import Header from './components/Header/Header';
import Home from "./screens/Home/Home";
import Detail from "./screens/Detail/Detail";
import Footer from "./components/Footer/Footer";
import OnlyMovies from "./screens/OnlyMovies/OnlyMovies";
import OnlySeries from "./screens/OnlySeries/OnlySeries";
import Favoritos from "./screens/Favoritos/Favoritos";
import SearchResults from "./screens/SearchResults/SearchResults";
import Error from "./screens/Error/Error";


function App() {
  return (
    <div className="App">
        <Header/>
            <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/detPeli/:id" component={Detail}/>
              <Route path="/favoritos" component={Favoritos}/>
              <Route path="/searchResults/:search" component={SearchResults}/>
              <Route path="/movies" component={OnlyMovies}/>
              <Route path="/series" component={OnlySeries}/>

              <Route path="/error" component={Error}/> {/* al final */}
            </Switch>
        <Footer/>  
    </div>

  );
}

export default App;

