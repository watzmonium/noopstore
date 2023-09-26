/** 
* @jest-environment jsdom
*/

import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../app";
import { fetchAllProducts, addProduct } from "../services/products";
import { fetchCart } from "../services/cart";

jest.mock("../services/products.js");
jest.mock("../services/cart.js");


const products = [
  {
    _id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99
  },
  {
    _id: 2,
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 0,
    price: 649.99
  },
  {
    _id: 3,
    title: "Yamaha Portable Keyboard",
    quantity: 2,
    price: 155.99
  },
  {
    _id: 4,
    title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
    quantity: 12,
    price: 13.74
  }
];

test('title is rendered', async () => {
  fetchAllProducts.mockResolvedValue(products);
  fetchCart.mockResolvedValue([]);

  render(<App />);

  const titleHeader = await screen.findByRole('heading', {name: /NoopStore/});
  expect(titleHeader).toBeInTheDocument();
});

test('products are loaded', async () => {
  const products = [
    {
      _id: 1,
      title: "Amazon Kindle E-reader",
      quantity: 5,
      price: 79.99
    },
    {
      _id: 2,
      title: "Apple 10.5-Inch iPad Pro",
      quantity: 0,
      price: 649.99
    },
    {
      _id: 3,
      title: "Yamaha Portable Keyboard",
      quantity: 2,
      price: 155.99
    },
  ];

  fetchAllProducts.mockResolvedValue(products);
  fetchCart.mockResolvedValue([])

  render(<App />);

  const heading = await screen.findByRole('heading', {
    name: /Yamaha Portable Keyboard/,
    level: 3
  })

  expect(heading).toBeInTheDocument();
});

test('product can be added from the form', async () => {
  const products = [
    {
      _id: 1,
      title: "Amazon Kindle E-reader",
      quantity: 5,
      price: 79.99
    },
    {
      _id: 2,
      title: "Apple 10.5-Inch iPad Pro",
      quantity: 0,
      price: 649.99
    },
    {
      _id: 3,
      title: "Yamaha Portable Keyboard",
      quantity: 2,
      price: 155.99
    }
  ];

  const newProduct = {
    _id: 4,
    title: "Test",
    quantity: 5,
    price: 69.69
  };

  fetchAllProducts.mockResolvedValue(products);
  addProduct.mockResolvedValue(newProduct);
  fetchCart.mockResolvedValue([]);

  render(<App />);
  const user = userEvent.setup();

  const formButton = screen.getByRole('button', {name: /Add A Product/});
  await user.click(formButton);
  const submitButton = await screen.findByRole('button', {name: /Update/});
  console.log(submitButton);
  await user.click(submitButton);

  const productHeading = await screen.findByRole('heading', {
    name: /Test/,
    level: 3
  });

  expect(productHeading).toBeInTheDocument();
});