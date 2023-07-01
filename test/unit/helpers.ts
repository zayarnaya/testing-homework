// import React, { PropsWithChildren } from 'react'
// import { render } from '@testing-library/react'
// import type { RenderOptions } from '@testing-library/react'
// import { initStore } from '../../src/client/store';
// import { Provider } from 'react-redux'
// import { PreloadedState } from 'redux';
// import { ExampleApi, CartApi } from '../../src/client/api';
// import axios from 'axios';
// import {jest} from '@jest/globals';
// import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from '../../src/common/types';
// jest.mock('../../src/client/api');
// // interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
// //     preloadedState?: PreloadedState<RootState>
// //     store?: AppStore
// //   }

// // const mockGetProducts = jest.fn<() => ProductShortInfo[]>();
// // jest.mocked(ExampleApi).mockImplementation(('') => {
// //   return {
// //     getProducts: mockGetProducts,
// //   };
// // });


// // export function renderWithProviders(  ui: React.ReactElement,
// //     {
// //       preloadedState = {},
// //       // Automatically create a store instance if no store was passed in
// //       store = initStore(mockExampleApi, mockCartApi),
// //       ...renderOptions
// //     } = {}
// //   ) {
// //     function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
// //       return <Provider store={store}>{children}</Provider>
// //     }
  
// //     // Return an object with the store and all of RTL's query functions
// //     return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
// //   }

// //   const mockApi = new ExampleApi('defg');
// //   mockApi.getProducts = () => {
// //     return [
// //         {
// //             id: 123,
// //             name: 'Fake#1',
// //             price: 12,
// //         },
// //         {
// //             id: 1,
// //             name: 'Fake#2',
// //             price: 122,
// //         },
// //         {
// //             id: 33,
// //             name: 'Fake#3',
// //             price: 458,
// //         },

// //     ]
// //   }

// //   export class mockExampleApi extends ExampleApi {
// //     constructor() {
// //         super('fggs');
// //         this.getProducts = () => {
// //             // return await axios.get<ProductShortInfo[]>(`${this.basename}/api/products`);
// //             return [
// //                 {
// //                     id: 123,
// //                     name: 'Fake#1',
// //                     price: 12,
// //                 },
// //                 {
// //                     id: 1,
// //                     name: 'Fake#2',
// //                     price: 122,
// //                 },
// //                 {
// //                     id: 33,
// //                     name: 'Fake#3',
// //                     price: 458,
// //                 },
    
// //             ]
// //         }
// //     }

    

// //     async getProductById(id: number) {
// //         return await axios.get<Product>(`${this.basename}/api/products/${id}`);
// //     }

// //     async checkout(form: CheckoutFormData, cart: CartState) {
// //         return await axios.post<CheckoutResponse>(`${this.basename}/api/checkout`, { form, cart });
// //     }
// // }
// export const dummyCart = {
//     1: {
//         name: 'Fake#1',
//         price: 12,
//         count: 1,
//     },
//     2: {
//         name: 'Fake#2',
//         price: 56,
//         count: 3,
//     },
//     3: {
//         name: 'Fake#3',
//         price: 86,
//         count: 2,
//     }
// }

// export const LOCAL_STORAGE_CART_KEY = 'example-store-cart';
// const mockGetState = jest.fn<() => CartState>().mockReturnValue(dummyCart);
// jest.mocked(CartApi).mockImplementation(() => {
//     return {
//         ...mockGetState,
//     }
// });
// export class mockCartApi {
//     getState(): CartState {
//         try {
//             const json = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
//             return JSON.parse(json) as CartState || {};
//         } catch {
//             return {};
//         }
//     }

//     setState(cart: CartState) {
//         localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cart));
//     }
// }

// // export interface CartItem {
// //     name: string;
// //     price: number;
// //     count: number;
// // }

// // export type CartState = Record<number, CartItem>;


