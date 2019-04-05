import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './containers/home/HomePage';
import ProductList from './containers/products/ProductList';
import ProductAdd from './containers/products/ProductAdd';
import ProductDetail from './containers/products/ProductDetail';
import ProductEdit from './containers/products/ProductEdit';
import CategoryList from './containers/categories/CategoryList';
import CategoryDetail from './containers/categories/CategoryDetail';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Menu />
          <div className="App">
            <Route path="/" exact component={HomePage}/>
            <Route path="/products" exact component={ProductList}/>
            <Route path="/products/add" component={ProductAdd}/>
            <Route path="/products/detail/:id" component={ProductDetail}/>
            <Route path="/products/edit/:id" component={ProductEdit}/>
            <Route path="/categories" component={CategoryList}/>
            <Route path="/categories/detail/:id" component={CategoryDetail}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
