import React from "react";
import Main from "../main/main.jsx";
import {connect} from "react-redux";
import {getProducts} from "../../reducer/data/selectors.js";

const App = (props) => {
  const {products} = props;

  return (
    <Main
      products={products}
    />
  );
};

const mapStateToProps = (state) => ({
  products: getProducts(state)
});

export {App};
export default connect(mapStateToProps)(App);
