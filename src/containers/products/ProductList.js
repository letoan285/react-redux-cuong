import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {loadProductsApi} from '../../effects/product.effects';

class ProductList extends Component {
  componentDidMount() {
    this.props.getProductList();
  }
  render() {
    console.log(this.props.products);
    const productList = this.props.products.map((product, index) => {
      return (
        <tr key={product.id}>
          <td>{ index+1 }</td>
          <td><Link to={`/products/detail/${product.id}`}> { product.name } </Link> </td>
          <td>{ product.description }</td>
          <td>{ product.price }</td>
          <td>{ product.status === 1 ? 'Active' : 'Inactive' }</td>
        </tr>
      );
    })
    return (
      <div className="ProductList">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Status</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            { productList }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: () => {
      dispatch(loadProductsApi())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
