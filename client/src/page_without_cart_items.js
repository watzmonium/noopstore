import React from "react";
import ReactDOM from "react-dom/client";
import data from '../mockData/data';

const ProductListing = ({listData}) => {
  return React.createElement('div', {className: 'product-listing', children: [
            React.createElement('h2', null, 'Products'),
            React.createElement(ProductList, {listData})
          ]});
};

const ProductList = ({listData}) => {
  const listItems = listData.map((item) => {
    return React.createElement(Product, {productData: item})
  });
  return React.createElement('ul', {className: 'product-list'}, listItems);
};

const Product = ({productData}) => {
  return React.createElement('li', {className: 'product', key: productData.id, children: [
    React.createElement(ProductDetails, {productData})
  ]});
};

const ProductDetails = ({productData}) => {
  const {title, price, quantity} = productData;
  return React.createElement('div', {className: 'product-details', children: [
    React.createElement('h3', null, title),
    React.createElement('p', {className: 'price'}, price),
    React.createElement('p', {className: 'quantity'}, `${quantity} left in stock`),
    React.createElement(Actions, null),
    React.createElement('button', {className: 'delete-button', children: [
      React.createElement('span', null, 'X')
    ]})
  ]});
}

const Actions = () => {
  return React.createElement('div', {className: 'actions product-actions', children: [
    React.createElement('button', {className: 'add-to-cart'}, 'Add to cart'),
    React.createElement('button', {className: 'edit'}, 'edit')
  ]});
}

const App = () => {
  return React.createElement('main', null, React.createElement(ProductListing, {listData: data}));
}

const root = document.getElementById('app');

ReactDOM.createRoot(root).render(React.createElement(App));