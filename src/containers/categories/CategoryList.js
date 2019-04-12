import React, { Component } from 'react';
import { loadCategoriesApi } from '../../effects/category.effects';
import { connect } from 'react-redux';
class CategoryList extends Component {
  componentDidMount() {
        this.props.getAllCategories();
  }
  render() {
    return (
      <div className="CategoryList">
        CategoryList
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllCategories: () => {
            dispatch(loadCategoriesApi())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
