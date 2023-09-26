/** 
* @jest-environment jsdom
*/

import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "../components/Product";


const product = {
  _id: 1,
  title: "test product",
  price: 69.69,
  quantity: 5,
};

test('product renders', () => {
  render(<Product productData={product} />);

  const li = screen.getByRole('listitem');
  expect(li).toBeInTheDocument();
});

test('prouct title is rendered', () => {
  render(<Product productData={product} />);

  const heading = screen.getByRole('heading', {
    name: /test product/,
    level: 3
  })

  expect(heading).toBeInTheDocument();
});

test('edit form shows when clicked', async () => {
  render(<Product productData={product} />);

  const editButton = screen.getByRole('button', {name: /Edit/});
  const user = userEvent.setup();
  await user.click(editButton);
  const editHeader = screen.getByRole('heading', {name: /Edit Product/, level: 3});
  expect(editHeader).toBeInTheDocument();

});