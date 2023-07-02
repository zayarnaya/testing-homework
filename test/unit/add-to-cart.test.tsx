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



// it ('после добавления товара в корзину в шапке появляется количество', async () => {
//     const basename = '';
//     // const mockGetState = jest.fn().mockReturnValue(dummyCart);
//     const user = userEvent.setup()
//     // mockedAxios.get.mockResolvedValueOnce(dummyProduct);
//     mockedAxios.get.mockResolvedValueOnce(dummyResponce);
//     mockedAxios.get.mockResolvedValueOnce(dummyProduct);

//     const cart = new CartApi;
  
//     const api = new ExampleApi(basename);
//     // const cart = new CartApi();
//     const store = initStore(api, cart);


    
//     const catPage = (
//   <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
  
  
//             <Provider store={store}>
//               <Product />
//             </Provider>
//             </MemoryRouter>
//     );
//     store.dispatch(productsLoad());
//     store.dispatch(productsLoaded(dummyResponce.data));
//     store.dispatch(productDetailsLoad(1));
//     store.dispatch(productDetailsLoaded(dummyProduct.data));
//     const { container, getByTestId, findByText } = render(catPage);
//     // await waitFor(() => {
//     //     expect(Boolean(container.querySelector('Product'))).toBe(true);
//     //   });
    
//     // await user.click(getByTestId('1'));
//     // expect(getByTestId('cart-link').textContent).toContain('Cart (1)');

//     console.log(container.innerHTML)
//     screen.logTestingPlaygroundURL();
    
// }) 

// it ('после добавления товара в корзину в шапке появляется количество', async () => {
//   const basename = '';
//   // const mockGetState = jest.fn().mockReturnValue(dummyCart);
//   const user = userEvent.setup()
//   // mockedAxios.get.mockResolvedValueOnce(dummyProduct);
//   // mockedAxios.get.mockResolvedValueOnce(dummyResponce);
//   // mockedAxios.get.mockResolvedValueOnce(dummyProduct);

//   const cart = new CartApi;

//   const api = new ExampleApi(basename);
//   // const cart = new CartApi();
//   const store = initStore(api, cart);


  
//   const catPage = (
// <MemoryRouter initialEntries={["/about"]} initialIndex={0}>


//           <Provider store={store}>
//             <Application />
//           </Provider>
//           </MemoryRouter>
//   );
// store.dispatch(addToCart(dummyProduct.data));
//   const { container, getByTestId, findByText } = render(catPage);
//   // await waitFor(() => {
//   //     expect(Boolean(container.querySelector('Product'))).toBe(true);
//   //   });
  
//   // await user.click(getByTestId('1'));
//   expect(getByTestId('cart-link').textContent).toContain('Cart (1)');

//   console.log(container.innerHTML)
//   screen.logTestingPlaygroundURL();
  
// }) 

it ('после добавления товара в корзину в шапке появляется количество', async () => {
  const basename = '';
  // const mockGetState = jest.fn().mockReturnValue(dummyCart);
  const user = userEvent.setup()
  // mockedAxios.get.mockResolvedValueOnce(dummyProduct);
  // mockedAxios.get.mockResolvedValueOnce(dummyResponce);
  // mockedAxios.get.mockResolvedValueOnce(dummyProduct);

  const cart = new CartApi;

  const api = new ExampleApi(basename);
  // const cart = new CartApi();
  const store = initStore(api, cart);


  
  const catPage = (
<MemoryRouter initialEntries={["/about"]} initialIndex={0}>


          <Provider store={store}>
            <Application />
          </Provider>
          </MemoryRouter>
  );
store.dispatch(addToCart(dummyProduct.data));
console.log('STORE', store.getState());
  const { container, getByTestId, findByText } = render(catPage);
  // await waitFor(() => {
  //     expect(Boolean(container.querySelector('Product'))).toBe(true);
  //   });
  
  // await user.click(getByTestId('1'));
  expect(getByTestId('cart-link').textContent).toContain('Cart (1)');
    store.dispatch(clearCart());
    console.log('STORE', store.getState());
  console.log(container.innerHTML)
  screen.logTestingPlaygroundURL();
  
}) 

it ('после чекаута появляется success message с классом alert-success', async () => {
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
    store.dispatch(checkoutComplete(12));
    expect(getByTestId('success').classList).toContain('alert-success');

    console.log(container.innerHTML)
    screen.logTestingPlaygroundURL();
    
}) 
