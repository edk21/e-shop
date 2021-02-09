import React from 'react';
import './App.css';
import "./bootstrap.min.css"
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider } from "./Context";
import Modal from "./components/Modal";


function App() {
  return (
    <ProductProvider>
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route path="/" component={ProductList} exact={true}/>

            <Route path="/details" component={Details}/>

            <Route path="/cart" component={Cart} exact={true}/>

            <Route component={Default}/>
          </Switch>
        </React.Fragment>
      </Router>
      <Modal />
    </ProductProvider>
  );
}

export default App;
