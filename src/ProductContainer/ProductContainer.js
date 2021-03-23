import React from "react";
import "./ProductContainer.scss";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsInCart: 0 };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.setState({ itemsInCart: this.state.itemsInCart + 1 });
  }
  render() {
    return (
      <div className="container">
        <img src={this.props.img} alt="" />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <button onClick={this.addItem}>Add to cart</button>
        <h1>{this.state.itemsInCart}</h1>
      </div>
    );
  }
}

export default ProductContainer;
