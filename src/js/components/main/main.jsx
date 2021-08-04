import React from "react";
import Header from "../header/header.jsx";
import Filter from "../filter/filter.jsx";
import Sorting from "../sorting/sorting.jsx";
import Catalog from "../catalog/catalog.jsx";

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="page-content">
      <Filter />
      <div className="page-content__wrapper">
        <Sorting />
        <Catalog />
      </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
