import { it, jest, expect } from "@jest/globals";

import { render } from "@testing-library/react";
import events from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';


import { Application } from '../../src/client/Application';


import { MemoryRouter } from "react-router";
import { initStore } from "../../src/client/store";
import { Provider } from "react-redux";
import { CartApi, ExampleApi } from "../../src/client/api";
import React from 'react'
import { Cart } from "../../src/client/pages/Cart";
import { CartState } from "../../src/common/types";
// import { dummyCart } from "./helpers";
jest.mock('../../src/client/api');
jest.mocked(CartApi).mockImplementation(() => {
  return {getState: jest.fn<() => CartState>().mockReturnValue(dummyCart), setState: jest.fn()}
});
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
it('по адресу /about должна открываться страница "о проекте"', () => {
  const basename = 'http://localhost:3000/hw/store';
  // const mockGetState = jest.fn().mockReturnValue(dummyCart);

  const cart = new CartApi;

  const api = new ExampleApi(basename);
  // const cart = new CartApi();
  const store = initStore(api, cart);
  
  const cartPage = (
<MemoryRouter initialEntries={["/about"]} initialIndex={0}>


          <Provider store={store}>
              <Cart />
          </Provider>
          </MemoryRouter>
  );
  const { container } = render(cartPage);
  console.log(container.innerHTML)

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
