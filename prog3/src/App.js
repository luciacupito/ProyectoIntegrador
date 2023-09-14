import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header'
import Home from "./screens/Home/Home"
import Detail from "./screens/Detail/Detail";

import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="App">
      <Header/>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/detPeli/:id" component={Detail}/>

            <Route path="/searchResults/:search" component={SearchResults}/>


            <Route path="" component={Error}/>
            
          </Switch>

      <Footer/>
    </div>
  );
}

export default App;

