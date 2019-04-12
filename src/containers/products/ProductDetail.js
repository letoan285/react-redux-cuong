import React, { Component } from 'react';
import { connect} from 'react-redux';
import { loadProductApi } from '../../effects/product.effects';
class ProductDetail extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProduct(id);
    }
  render() {
      const { product } = this.props;
    return (
      <div className="ProductDetail">
        <h3>product name: {product.name}</h3>
        <h3>Description: {product.description}</h3>
        <h3>Price: {product.price}</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        product: state.productReducer.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (id) => {
            dispatch(loadProductApi(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
