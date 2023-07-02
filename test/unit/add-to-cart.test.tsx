import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { Application } from '../../src/client/Application';
import { MemoryRouter } from "react-router";
import { addToCart, initStore } from "../../src/client/store";
import { Provider } from "react-redux";
import { CartApi, ExampleApi } from "../../src/client/api";
import React from 'react'

import { dummyProduct } from './cart-store';

it ('после добавления товара в корзину в шапке появляется количество', async () => {
  const basename = '';
  const cart = new CartApi;
  const api = new ExampleApi(basename);
  const store = initStore(api, cart);
  const catPage = (
<MemoryRouter initialEntries={["/about"]} initialIndex={0}>


          <Provider store={store}>
            <Application />
          </Provider>
          </MemoryRouter>
  );
store.dispatch(addToCart(dummyProduct.data));
  const { getByTestId } = render(catPage);
  expect(getByTestId('cart-link').textContent).toContain('Cart (1)');
 
}) 

