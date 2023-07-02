import { it, jest, expect } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import events from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';


import { Application } from '../../src/client/Application';


import { MemoryRouter } from "react-router";
import { initStore } from "../../src/client/store";
import { Provider } from "react-redux";
import { CartApi, ExampleApi } from "../../src/client/api";
import React from 'react'
import { Cart } from "../../src/client/pages/Cart";
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from "../../src/common/types";
import { AxiosResponse } from "axios";
// import { dummyCart } from "./helpers";
jest.mock('../../src/client/api');
jest.mocked(CartApi).mockImplementation(() => {
  return {getState: jest.fn<() => CartState>().mockReturnValue(dummyCart), setState: jest.fn()}
});
// jest.mocked(ExampleApi).mockImplementation(function() {
//   return {
//     basename,
//     getProducts: jest.fn<() => Promise<AxiosResponse<ProductShortInfo[], any>>>().mockResolvedValue(dummyResponce),
//     getProductById: jest.fn<(id: number) => Promise<AxiosResponse<Product, any>>>().mockResolvedValue(dummyProduct),
//     checkout: jest.fn<(form: CheckoutFormData, cart: CartState) => Promise<AxiosResponse<CheckoutResponse, any>>>().mockResolvedValue(dummyCheckout)
//   }
// })
const dummyCart = {
      1: {
          name: 'Fake#1',
          price: 12,
          count: 1,
      },
      2: {
          name: 'Fake#2',
          price: 56,
          count: 3,
      },
      3: {
          name: 'Fake#3',
          price: 86,
          count: 2,
      }
  }
const dummyResponce: AxiosResponse<ProductShortInfo[], any> = {
  data: [
    {
        id: 123,
        name: 'Fake#1',
        price: 12,
    },
    {
        id: 1,
        name: 'Fake#2',
        price: 122,
    },
    {
        id: 33,
        name: 'Fake#3',
        price: 458,
    },

],
  status: 200,
  statusText: '',
  headers: {},
  config: {}
}

const dummyProduct: AxiosResponse<Product, any> = {
  data: {
    description: 'фейк какой-то',
    material: 'шкура молодого дерматина',
    color: 'black',
    id: 1,
    name: 'Fake#2',
    price: 122,

  },
  status: 200,
  statusText: '',
  headers: {},
  config: {}
}

const dummyCheckout: AxiosResponse<CheckoutResponse, any> = {
  data: {
    id: 12
  },
  status: 200,
  statusText: '',
  headers: {},
  config: {}
}

it('корзина правильно отображает товар', async () => {
  const basename = 'http://localhost:3000/hw/store';
  // const mockGetState = jest.fn().mockReturnValue(dummyCart);
  const user = userEvent.setup()

  const cart = new CartApi;

  const api = new ExampleApi(basename);
  // const cart = new CartApi();
  const store = initStore(api, cart);
  console.log('STORE', store.getState());
  const cartPage = (
<MemoryRouter initialEntries={["/about"]} initialIndex={0}>


          <Provider store={store}>
              <Cart />
          </Provider>
          </MemoryRouter>
  );

  const { container, getByTestId } = render(cartPage);
  expect(/Cart is empty/.test(getByTestId('content').innerHTML)).toBeFalsy();
  const clearButton = getByTestId("clearCart");
  console.log('STORE', store.getState());
  await user.click(clearButton);
  expect(/Cart is empty/.test(getByTestId('content').innerHTML)).toBeTruthy();


  // console.log(container.innerHTML)
  // screen.logTestingPlaygroundURL();
// теперь вопрос нахрена это нужно
  // expect(getByTestId("page-title").textContent).toEqual("About");
});

// it("если добавить элемент, он появляется в списке", async () => {
//   const store = initStore();
//   const application = (
//     <BrowserRouter>
//       <Provider store={store}>
//         <Application />
//       </Provider>
//     </BrowserRouter>
//   );

//   const { getByTestId, getAllByTestId } = render(application);

//   await events.type(getByTestId("input-add"), "Сделать домашку");

//   await events.click(getByTestId("button-add"));

//   const items = getAllByTestId("list-item");

//   expect(items.map((el) => el.textContent)).toContain("Сделать домашку");
// });
