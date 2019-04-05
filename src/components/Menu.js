import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand" to="#">Fixed navbar</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Product List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/products/add" >Add New</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Category List</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
