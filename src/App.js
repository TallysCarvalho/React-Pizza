import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import Corpo from './components/Corpo';
import Products from './components/products'
import Feature from './components/features'
import {productData} from './components/products/data'
import {productData2} from './components/products/data'
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Corpo/>
     <Products heading='Escolha sua Favorita!' data={productData}/>
    <Feature/>
    <Products heading='Escolha sua Favorita!' data={productData2}/>
    <Footer/>
    </Router>
  );
}

export default App;
