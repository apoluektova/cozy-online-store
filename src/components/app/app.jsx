import React from "react";
import Main from "../main/main.jsx";
import {connect} from "react-redux";
import {selectProducts, selectCategories} from "../../reducer/data/selectors.js";

const App = (props) => {
  const {products, categories} = props;

  return (
    <Main
      products={products}
      categories={categories}
    />
  );
};

const mapStateToProps = (state) => ({
  products: selectProducts(state),
  categories: selectCategories(state),
});

export {App};
export default connect(mapStateToProps)(App);
