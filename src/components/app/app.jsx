import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import {connect} from "react-redux";
import {selectCategories, selectProductsBySortingType} from "../../reducer/data/selectors.js";
import {ActionCreator} from "../../reducer/app/app.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {APP_ROUTE} from "../../const.js";
import Cart from "../cart/cart.jsx";
import Customer from "../customer/customer.jsx";
import Payment from "../payment/payment.jsx";
import Address from "../address/address.jsx";

const App = (props) => {
  const {
    products,
    categories,
    onCategoryClick,
    onPriceRangeClick,
    onSortingButtonClick,
    onCartButtonClick
  } = props;

  return (
    <Router>
      <Switch>
        <Route
          exact
          path={APP_ROUTE.MAIN}
          render={() => {
            return (
              <Main
                products={products}
                categories={categories}
                onCategoryClick={onCategoryClick}
                onPriceRangeClick={onPriceRangeClick}
                onSortingButtonClick={onSortingButtonClick}
                onCartButtonClick={onCartButtonClick}
              />
            );
          }}
        />
        <Route
          exact
          path={APP_ROUTE.CART}
          render={() => {
            return (
              <Cart />
            );
          }}
        />
        <Route
          exact
          path={APP_ROUTE.ORDER}
          render={() => {
            return (
              <Customer />
            );
          }}
        />
        <Route
          exact
          path={APP_ROUTE.PAYMENT}
          render={() => {
            return (
              <Payment />
            );
          }}
        />
        <Route
          exact
          path={APP_ROUTE.ADDRESS}
          render={() => {
            return (
              <Address />
            );
          }}
        />
      </Switch>
    </Router>
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
  },
  onCartButtonClick(product) {
    dispatch(ActionCreator.addToCart(product));
  },
});

App.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  onPriceRangeClick: PropTypes.func.isRequired,
  onSortingButtonClick: PropTypes.func.isRequired,
  onCartButtonClick: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
