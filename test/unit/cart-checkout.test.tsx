import axios from 'axios';
import { it, jest, expect } from "@jest/globals";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { addToCart, checkoutComplete, initStore } from "../../src/client/store";
import { Provider } from "react-redux";
import { CartApi, ExampleApi } from "../../src/client/api";
import React from 'react'
import { Cart } from "../../src/client/pages/Cart";
import { dummyCheckout, dummyProduct } from './cart-store';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


it ('после чекаута появляется success message с классом alert-success', async () => {
  const basename = '';
  const user = userEvent.setup()
  mockedAxios.post.mockResolvedValueOnce(dummyCheckout);
  const cart = new CartApi;

  const api = new ExampleApi(basename);
  const store = initStore(api, cart);
  
  const catPage = (
<MemoryRouter initialEntries={["/about"]} initialIndex={0}>


          <Provider store={store}>
            <Cart />
          </Provider>
          </MemoryRouter>
  );
  const { getByTestId } = render(catPage);
  store.dispatch(addToCart(dummyProduct.data));
  store.dispatch(checkoutComplete(12));
  expect(getByTestId('success').classList).toContain('alert-success');

}) 

it ('после отправки инфо оформляется заказ', async () => {
    const basename = '';
    const user = userEvent.setup()
    mockedAxios.post.mockResolvedValueOnce(dummyCheckout);
    const cart = new CartApi;
  
    const api = new ExampleApi(basename);
    const store = initStore(api, cart);
    
    const catPage = (
  <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
  
  
            <Provider store={store}>
              <Cart />
            </Provider>
            </MemoryRouter>
    );
    const { getByTestId } = render(catPage);

    store.dispatch(addToCart(dummyProduct.data));
    await user.type(getByTestId('input-name'), 'sjakfg');
    await user.type(getByTestId('input-phone'), '2837429354');
    await user.type(getByTestId('input-address'), 'sjakfg');
    await user.click(getByTestId("checkout-btn"));
    
    expect(getByTestId('success').classList).toContain('Cart-SuccessMessage');

}) 
