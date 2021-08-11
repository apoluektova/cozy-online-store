import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./api.js";
import "./scss/style.scss";

const SHOWN_PRODUCT_CARDS = 12;

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadSomeProducts(SHOWN_PRODUCT_CARDS));
store.dispatch(DataOperation.loadCategories());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
