import { it, expect } from "@jest/globals";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Application } from '../../src/client/Application';
import { MemoryRouter } from "react-router";
import { initStore } from "../../src/client/store";
import { Provider } from "react-redux";
import { CartApi, ExampleApi } from "../../src/client/api";
import React from 'react'

it ('после нажатия на кнопку меню гамбургера оно скрывается', async () => {
  const basename = '';
  const user = userEvent.setup()
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

  const { container, getByTestId, findByText } = render(catPage);
  const toggler = container.querySelector('.Application-Toggler');
  toggler?.setAttribute('style', 'display: block;');
  !!toggler && await user.click(toggler);
  const menu = container.querySelector(".Application-Menu");
  const link = menu?.querySelector('.nav-link');
  !!link && await user.click(link);
  expect(menu?.getAttribute('class')).toBe('Application-Menu collapse navbar-collapse');

 
}) 
