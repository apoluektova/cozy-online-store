import React from "react";
import Header from "../header/header.jsx";
import Filter from "../filter/filter.jsx";
import Sorting from "../sorting/sorting.jsx";
import Catalog from "../catalog/catalog.jsx";

const Main = (props) => {
  const {products} = props;
  return (
    <React.Fragment>
      <Header />
      <main className="page-content">
      <Filter />
      <div className="page-content__wrapper">
        <Sorting />
        <Catalog
          products={products}
        />
      </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
