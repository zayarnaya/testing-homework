import axios from 'axios';
import { it, jest, expect } from "@jest/globals";

import { render, screen, waitFor } from "@testing-library/react";
import events from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';


import { Application } from '../../src/client/Application';


import { MemoryRouter } from "react-router";
import { addToCart, checkout, checkoutComplete, clearCart, initStore, productDetailsLoad, productDetailsLoaded, productsLoad, productsLoaded } from "../../src/client/store";
import { Provider, useDispatch } from "react-redux";
import { CartApi, ExampleApi } from "../../src/client/api";
import React from 'react'
import { Cart } from "../../src/client/pages/Cart";
import { CartState, CheckoutFormData, CheckoutResponse, ProductShortInfo } from "../../src/common/types";
import { AxiosResponse } from "axios";
import { dummyCart, dummyCheckout, dummyProduct, dummyResponce } from './cart-store.test';
import { Catalog } from '../../src/client/pages/Catalog';
import { Product } from '../../src/client/pages/Product';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
// const mockedGetProducts: AxiosResponse<ProductShortInfo[]> = {
//     data: products,
//     status: 200,
//     statusText: 'OK',
//     headers: {},
//     config: {},
//   };

it ('после добавления из страницы продукта в сторе изменяется количество товара', async () => {
  const basename = '';
  // const mockGetState = jest.fn().mockReturnValue(dummyCart);
  const user = userEvent.setup()
  // mockedAxios.get.mockResolvedValueOnce(dummyProduct);
  // mockedAxios.get.mockResolvedValueOnce(dummyResponce);
  // mockedAxios.get.mockResolvedValueOnce(dummyProduct);

  const cart = new CartApi;
  const api = new ExampleApi(basename);
  const store = initStore(api, cart);
  const productPage = (
    <MemoryRouter initialEntries={["/about"]} initialIndex={0}>


          <Provider store={store}>
            <Product />
          </Provider>
          </MemoryRouter>
  )

  
})
