import axios from 'axios';
import { it, jest, expect } from "@jest/globals";

import { render, screen, waitFor } from "@testing-library/react";
import events from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';


import { Application } from '../../src/client/Application';


import { MemoryRouter } from "react-router";
import { addToCart, checkout, checkoutComplete, initStore } from "../../src/client/store";
import { Provider, useDispatch } from "react-redux";
import { CartApi, ExampleApi } from "../../src/client/api";
import React from 'react'
import { Cart } from "../../src/client/pages/Cart";
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from "../../src/common/types";
import { AxiosResponse } from "axios";
import { dummyCart, dummyCheckout, dummyProduct, dummyResponce, dummyUser } from './cart-store.test';
import { Catalog } from '../../src/client/pages/Catalog';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
// jest.mock('../../src/client/api');
// jest.mocked(CartApi).mockImplementation(() => {
//   return {getState: jest.fn<() => CartState>().mockReturnValue(dummyCart), setState: jest.fn()}
// });
// const mockedGetProducts: AxiosResponse<ProductShortInfo[]> = {
//     data: products,
//     status: 200,
//     statusText: 'OK',
//     headers: {},
//     config: {},
//   };



// it ('каталог грузится себе', async () => {
//     const basename = 'http://localhost:3000/hw/store';
//     // const mockGetState = jest.fn().mockReturnValue(dummyCart);
//     const user = userEvent.setup()
//     mockedAxios.get.mockResolvedValueOnce(dummyResponce);
//     const cart = new CartApi;
  
//     const api = new ExampleApi(basename);
//     // const cart = new CartApi();
//     const store = initStore(api, cart);
    
//     const catPage = (
//   <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
  
  
//             <Provider store={store}>
//               <Catalog />
//             </Provider>
//             </MemoryRouter>
//     );
//     const { container, getByTestId, findByText } = render(catPage);
//     await waitFor(() => {
//         expect((getByTestId('catalog')).innerHTML).toContain('<div class=\"card-body\">');
//       });

//     console.log(container.innerHTML)
//     screen.logTestingPlaygroundURL();
    
// }) 

it ('после чекаута появляется success message с классом alert-success', async () => {
    const basename = 'http://localhost:3000/hw/store';
    // const mockGetState = jest.fn().mockReturnValue(dummyCart);
    const user = userEvent.setup()
    mockedAxios.post.mockResolvedValueOnce(dummyCheckout);
    const cart = new CartApi;
  
    const api = new ExampleApi(basename);
    // const cart = new CartApi();
    const store = initStore(api, cart);
    
    const catPage = (
  <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
  
  
            <Provider store={store}>
              <Cart />
            </Provider>
            </MemoryRouter>
    );
    const { container, getByTestId, findByText } = render(catPage);
    // await waitFor(() => {
    //     expect((getByTestId('catalog')).innerHTML).toContain('<div class=\"card-body\">');
    //   });
    store.dispatch(addToCart(dummyProduct.data));
    store.dispatch(checkoutComplete(12));
    expect(getByTestId('success').classList).toContain('alert-success');

    console.log(container.innerHTML)
    screen.logTestingPlaygroundURL();
    
}) 

it ('после отправки инфо оформляется заказ', async () => {
    const basename = '';
    // const mockGetState = jest.fn().mockReturnValue(dummyCart);
    const user = userEvent.setup()
    mockedAxios.post.mockResolvedValueOnce(dummyCheckout);
    const cart = new CartApi;
  
    const api = new ExampleApi(basename);
    // const cart = new CartApi();
    const store = initStore(api, cart);
    
    const catPage = (
  <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
  
  
            <Provider store={store}>
              <Cart />
            </Provider>
            </MemoryRouter>
    );
    const { container, getByTestId, findByText } = render(catPage);
    // await waitFor(() => {
    //     expect((getByTestId('catalog')).innerHTML).toContain('<div class=\"card-body\">');
    //   });
    store.dispatch(addToCart(dummyProduct.data));
    await user.type(getByTestId('input-name'), 'sjakfg');
    await user.type(getByTestId('input-phone'), '2837429354');
    await user.type(getByTestId('input-address'), 'sjakfg');
    await user.click(getByTestId("checkout-btn"));
    



    expect(getByTestId('success').classList).toContain('Cart-SuccessMessage');

    console.log(container.innerHTML)
    screen.logTestingPlaygroundURL();
    
}) 
