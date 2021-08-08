import React from "react";
import Main from "../main/main.jsx";
import {connect} from "react-redux";
import {selectCategories, selectProductsByPrice, selectProductsBySortingType} from "../../reducer/data/selectors.js";
import {ActionCreator} from "../../reducer/app/app.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const App = (props) => {
  const {products, categories, onCategoryClick, onPriceRangeClick, onSortingButtonClick} = props;

  return (
    <Main
      products={products}
      categories={categories}
      onCategoryClick={onCategoryClick}
      onPriceRangeClick={onPriceRangeClick}
      onSortingButtonClick={onSortingButtonClick}
    />
  );
};

const mapStateToProps = (state) => ({
  products: selectProductsBySortingType(state),
  categories: selectCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCategoryClick(category) {
    dispatch(ActionCreator.changeCategory(category));
    dispatch(DataOperation.loadProductsByCategory(category));
  },
  onPriceRangeClick(priceRange) {
    dispatch(ActionCreator.changePriceRange(priceRange));
  },
  onSortingButtonClick(sortingType) {
    dispatch(ActionCreator.changeSortingType(sortingType));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
