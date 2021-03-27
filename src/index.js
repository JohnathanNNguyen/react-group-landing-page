import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ProductContainer from './ProductContainer/ProductContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <ProductContainer
          img="/images/recipe-book-ss.png"
          title="Quinoa"
          description="Yum!!"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
