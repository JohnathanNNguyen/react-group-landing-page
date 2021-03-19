import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ProductContainer from "./ProductContainer/ProductContainer";

const App = () => {
  return (
    <ProductContainer
      img="/images/recipe-book-ss.png"
      title="Quinoa"
      description="Yummmmmmmmy"
    />
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
