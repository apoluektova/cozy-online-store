import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Filter from "../filter/filter.jsx";
import Sorting from "../sorting/sorting.jsx";
import Catalog from "../catalog/catalog.jsx";

const Main = (props) => {
  const {
    products,
    categories,
    onCategoryClick,
    onPriceRangeClick,
    onSortingButtonClick,
    onCartButtonClick
  } = props;

  return (
    <React.Fragment>
      <Header />
      <main className="page-content">
        <div className="page-content__wrapper">
          <Filter
            categories={categories}
            onCategoryClick={onCategoryClick}
            onPriceRangeClick={onPriceRangeClick}
          />
          <div className="page-content__wrapper-main">
            <Sorting
              onSortingButtonClick={onSortingButtonClick}
            />
            <Catalog
              products={products}
              onCartButtonClick={onCartButtonClick}
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

Main.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  onPriceRangeClick: PropTypes.func.isRequired,
  onSortingButtonClick: PropTypes.func.isRequired,
  onCartButtonClick: PropTypes.func.isRequired
};

export default Main;
