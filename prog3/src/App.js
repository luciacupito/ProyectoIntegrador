import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home"
import Detalle from "./screens/Detalle/Detalle";

function App() {
  return (
    <Router> {/* Wrap your routes in a Router component */}
      <body>
        <Header />
        <h1>My App in React</h1>
        <main>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/favoritos" element={<Favoritos />} /> */}
            <Route path="/detalle/:id" element={<Detalle />} />
            {/* <Route path="/popular" element={<Popular />} /> */}
            {/* <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/busqueda/:search" element={<Results />} />
            <Route path="*" element={<Error404 />} /> */}
          </Routes>
        </main>
        <Footer />
      </body>
    </Router>
  );
}

export default App;


