import React from "react";
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
      <Filter
        categories={categories}
        onCategoryClick={onCategoryClick}
        onPriceRangeClick={onPriceRangeClick}
      />
      <div className="page-content__wrapper">
        <Sorting
          onSortingButtonClick={onSortingButtonClick}
        />
        <Catalog
          products={products}
          onCartButtonClick={onCartButtonClick}
        />
      </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
