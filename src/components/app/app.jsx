import React from "react";
import Main from "../main/main.jsx";
import {connect} from "react-redux";
import {getProducts} from "../../reducer/data/selectors.js";

const App = (products) => {
  return (
    <Main
      products={products}
    />
  );
};

const mapStateToProps = (state) => {
  debugger;
  return ({
  products: getProducts(state)
});
};

export {App};
export default connect(mapStateToProps)(App);
