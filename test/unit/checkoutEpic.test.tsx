import axios from 'axios';
import { it, jest, expect } from "@jest/globals";

import { render, screen, waitFor } from "@testing-library/react";
import events from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';


import { Application } from '../../src/client/Application';


import { MemoryRouter } from "react-router";
import { addToCart, checkout, checkoutComplete, initStore, productDetailsLoad, productDetailsLoaded, productsLoad, productsLoaded, rootEpic } from "../../src/client/store";
import { Provider, useDispatch } from "react-redux";
import { CartApi, ExampleApi } from "../../src/client/api";
import React from 'react'
import { Cart } from "../../src/client/pages/Cart";
import { CartState, CheckoutFormData, CheckoutResponse, ProductShortInfo } from "../../src/common/types";
import { AxiosResponse } from "axios";
import { dummyCart, dummyCheckout, dummyProduct, dummyResponce, dummyUser } from './cart-store.test';
import { Catalog } from '../../src/client/pages/Catalog';
import { Product } from '../../src/client/pages/Product';
import { ofType } from "redux-observable";
import { Observable } from 'rxjs';
import { Action } from 'redux';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('rootEpic', () => {
  it('корректно обрабатывает checkout', () => {
    const store = initStore(new ExampleApi(''), new CartApi);
    mockedAxios.post.mockResolvedValueOnce(dummyCheckout);
    store.dispatch(addToCart(dummyProduct.data));
    store.dispatch(checkout(dummyUser, {
      1: {
        name: 'Fake#1',
        price: 12,
        count: 1,
    },
    }));
    console.log(store.getState());
  })
})

