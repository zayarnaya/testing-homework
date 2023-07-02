import React from 'react';
import { it, jest, expect } from "@jest/globals";

import events from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { Form } from '../../src/client/components/Form';
import { CartApi, ExampleApi } from '../../src/client/api';
import { ApplicationState, addToCart, checkout, initStore } from '../../src/client/store';
import { MemoryRouter } from 'react-router';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Cart } from '../../src/client/pages/Cart';
import { dummyCart, dummyUser } from './cart-store.test';

const empty='';
const name = 'ыыы';
const phoneWrong='шыплоыир';
const phoneRight = '8916101101';


describe('Форма заказа', () => {
    it('если имя не введено, должна срабатывать проверка', () => {
        const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

        const { container, getByRole, getByLabelText } = render(form);


        const button = getByRole("button");
        const nameInput = getByLabelText('Name') as HTMLInputElement;
        fireEvent.change(nameInput, { target: { value: empty}})
        fireEvent.click(button);
        expect(nameInput.classList.contains('is-invalid')).toBe(true); 

    });
});

describe('Форма заказа', () => {
    it('если имя введено, проверка не должна присваивать is-invalid', () => {
        const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

        const { container, getByRole, getByLabelText } = render(form);


        const button = getByRole("button");
        const nameInput = getByLabelText('Name') as HTMLInputElement;
        fireEvent.change(nameInput, { target: { value: name}})
        // console.log(nameInput);
        fireEvent.click(button);
        expect(nameInput.classList.contains('is-invalid')).toBe(false); // падает, супер
        // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
        // console.log(container.outerHTML);
        // console.log(container.innerHTML);

        // expect(container.textContent).toBe('example');
    });
});


describe('Форма заказа', () => {
    it('если в поле телефона введены буквы, должна срабатывать проверка', () => {
        const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

        const { container, getByRole, getByLabelText } = render(form);


        const button = getByRole("button");
        const phoneInput = getByLabelText('Phone') as HTMLInputElement;
        fireEvent.change(phoneInput, { target: { value: phoneWrong}})
        // console.log(nameInput);
        fireEvent.click(button);
        expect(phoneInput.classList.contains('is-invalid')).toBe(true); // падает, супер
        // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
        // console.log(container.outerHTML);
        // console.log(container.innerHTML);

        // expect(container.textContent).toBe('example');
    });
});


describe('Форма заказа', () => {
    it('если в поле телефона введен правильный формат номера, проверка не должна выставлять is-invalid', () => {
        const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

        const { container, getByRole, getByLabelText } = render(form);


        const button = getByRole("button");
        const phoneInput = getByLabelText('Phone') as HTMLInputElement;
        fireEvent.change(phoneInput, { target: { value: phoneRight}})
        // console.log(nameInput);
        fireEvent.click(button);
        expect(phoneInput.classList.contains('is-invalid')).toBe(false); // падает, супер
        // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
        // console.log(container.outerHTML);
        // console.log(container.innerHTML);

        // expect(container.textContent).toBe('example');
    });
});



describe('Форма заказа', () => {
    it('если в поле адреса пусто, должна срабатывать проверка', () => {
        const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

        const { container, getByRole, getByLabelText } = render(form);


        const button = getByRole("button");
        const addressInput = getByLabelText('Address') as HTMLInputElement;
        fireEvent.change(addressInput, { target: { value: empty}})
        // console.log(nameInput);
        fireEvent.click(button);
        expect(addressInput.classList.contains('is-invalid')).toBe(true); // падает, супер
        // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
        // console.log(container.outerHTML);
        // console.log(container.innerHTML);

        // expect(container.textContent).toBe('example');
    });
});


describe('Форма заказа', () => {
    it('если в поле адреса не пусто, проверка не должна выставлять is-invalid', () => {
        const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

        const { container, getByRole, getByLabelText } = render(form);


        const button = getByRole("button");
        const addressInput = getByLabelText('Address') as HTMLInputElement;
        fireEvent.change(addressInput, { target: { value: name}})
        // console.log(nameInput);
        fireEvent.click(button);
        expect(addressInput.classList.contains('is-invalid')).toBe(false); // падает, супер
        // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
        // console.log(container.outerHTML);
        // console.log(container.innerHTML);

        // expect(container.textContent).toBe('example');
    });
});

// it('проверяем отправку корзины', async () => {
//     const basename = 'http://localhost:3000/hw/store';
//     // const mockGetState = jest.fn().mockReturnValue(dummyCart);
//     const user = userEvent.setup()

//     const FakeDispatcher = () => {
//       const dispatch = useDispatch();
//       const cartt = useSelector((s: ApplicationState) => s.cart);
//       return <>
//       <button data-testid='add' onClick={() => dispatch(addToCart(    {description: 'фейк какой-то',
//     material: 'шкура молодого дерматина',
//     color: 'black',
//     id: 1,
//     name: 'Fake#2',
//     price: 122,}))}></button>
//       {/* <Form data-testid='dispatch' onSubmit={() => dispatch(checkout(dummyUser, cartt))}/> */}
//       </>
//     }
  
//     const cart = new CartApi;
  
//     const api = new ExampleApi(basename);
//     // const cart = new CartApi();
//     const store = initStore(api, cart);
    
//     const cartPage = (
//   <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
  
  
//             <Provider store={store}>
//                 <Cart />
//                 <FakeDispatcher />
//             </Provider>
//             </MemoryRouter>
//     );
//     const { container, getByTestId, getByRole } = render(cartPage);
//     // const clearButton = getByTestId("clearCart");
   

//     // expect(/Cart is empty/.test(getByTestId('content').innerHTML)).toBeTruthy();
//     // getByTestId('checkoutForm').innerHTML='';
//     await user.click(getByTestId('add'));

//     await user.click(getByRole('button', { name: 'Checkout'}));
    

//     console.log(container.innerHTML)
//     screen.logTestingPlaygroundURL();
// });
