import React from "react";
import Main from "../main/main.jsx";
import {connect} from "react-redux";
import {selectProducts, selectCategories} from "../../reducer/data/selectors.js";
import {ActionCreator} from "../../reducer/app/app.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const App = (props) => {
  const {products, categories, onCategoryClick} = props;

  return (
    <Main
      products={products}
      categories={categories}
      onCategoryClick={onCategoryClick}
    />
  );
};

const mapStateToProps = (state) => ({
  products: selectProducts(state),
  categories: selectCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCategoryClick(category) {
    dispatch(ActionCreator.changeCategory(category));
    dispatch(DataOperation.loadProductsByCategory(category));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
