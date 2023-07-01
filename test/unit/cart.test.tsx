// import React from 'react';

// import { fireEvent, getByLabelText, getByText, render } from '@testing-library/react';
// import { Cart } from '../../src/client/pages/Cart';
// import configureMockStore from "redux-mock-store"; 
// import { Provider } from 'react-redux';
// import { ApplicationState } from '../../src/client/store';



// const empty='';
// const name = 'ыыы';
// const phoneWrong='шыплоыир';
// const phoneRight = '8916101101';

// // здесь стейт какой-то ннада

// const mockStore = configureMockStore([]); 

// const initialState: ApplicationState =  {
//     details: {},
//     cart: {
//         1: {
//             name: 'fake1',
//             price: 87,
//             count: 1,
//         }
//     }
// }
// // не, чот не то
// describe("Корзина", () => { 
//     it("если в форму все введено корректно, должно появляться уведомление с классом SuccessMessage и alert-success", () => { 
//       const store = mockStore(initialState); 
//       const { getByText, getByLabelText } = render( 
//         <Provider store={store}> 
//             <Cart />
//         </Provider> 
//       ); 

//       const button = getByText("Checkout"); 
//       const nameInput = getByLabelText('Name') as HTMLInputElement;
//       fireEvent.change(nameInput, { target: { value: name}});
//       const phoneInput = getByLabelText('Phone') as HTMLInputElement;
//       fireEvent.change(phoneInput, { target: { value: phoneRight}});
//       const addressInput = getByLabelText('Address') as HTMLInputElement;
//       fireEvent.change(addressInput, { target: { value: empty}});

//       fireEvent.click(button); 
//       const actions = store.getActions(); 
//       expect(actions).toEqual([{ type: 'CHECKOUT' }]); 
//     }); 
//   }); 

// // describe('Корзина', () => {
// //     it('если в форму все введено корректно, должно появляться уведомление с классом SuccessMessage и alert-success', () => {
// //         const form = <Cart />;

// //         const { container, getByRole, getByLabelText } = render(form);


// //         const button = getByRole("button");
// //         const nameInput = getByLabelText('Name') as HTMLInputElement;
// //         fireEvent.change(nameInput, { target: { value: empty}})
// //         fireEvent.click(button);
// //         expect(nameInput.classList.contains('is-invalid')).toBe(true); 

// //     });
// // });

// // describe('Форма заказа', () => {
// //     it('если имя введено, проверка не должна присваивать is-invalid', () => {
// //         const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

// //         const { container, getByRole, getByLabelText } = render(form);


// //         const button = getByRole("button");
// //         const nameInput = getByLabelText('Name') as HTMLInputElement;
// //         fireEvent.change(nameInput, { target: { value: name}})
// //         // console.log(nameInput);
// //         fireEvent.click(button);
// //         expect(nameInput.classList.contains('is-invalid')).toBe(false); // падает, супер
// //         // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
// //         // console.log(container.outerHTML);
// //         // console.log(container.innerHTML);

// //         // expect(container.textContent).toBe('example');
// //     });
// // });


// // describe('Форма заказа', () => {
// //     it('если в поле телефона введены буквы, должна срабатывать проверка', () => {
// //         const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

// //         const { container, getByRole, getByLabelText } = render(form);


// //         const button = getByRole("button");
// //         const phoneInput = getByLabelText('Phone') as HTMLInputElement;
// //         fireEvent.change(phoneInput, { target: { value: phoneWrong}})
// //         // console.log(nameInput);
// //         fireEvent.click(button);
// //         expect(phoneInput.classList.contains('is-invalid')).toBe(true); // падает, супер
// //         // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
// //         // console.log(container.outerHTML);
// //         // console.log(container.innerHTML);

// //         // expect(container.textContent).toBe('example');
// //     });
// // });


// // describe('Форма заказа', () => {
// //     it('если в поле телефона введен правильный формат номера, проверка не должна выставлять is-invalid', () => {
// //         const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

// //         const { container, getByRole, getByLabelText } = render(form);


// //         const button = getByRole("button");
// //         const phoneInput = getByLabelText('Phone') as HTMLInputElement;
// //         fireEvent.change(phoneInput, { target: { value: phoneRight}})
// //         // console.log(nameInput);
// //         fireEvent.click(button);
// //         expect(phoneInput.classList.contains('is-invalid')).toBe(false); // падает, супер
// //         // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
// //         // console.log(container.outerHTML);
// //         // console.log(container.innerHTML);

// //         // expect(container.textContent).toBe('example');
// //     });
// // });



// // describe('Форма заказа', () => {
// //     it('если в поле адреса пусто, должна срабатывать проверка', () => {
// //         const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

// //         const { container, getByRole, getByLabelText } = render(form);


// //         const button = getByRole("button");
// //         const addressInput = getByLabelText('Address') as HTMLInputElement;
// //         fireEvent.change(addressInput, { target: { value: empty}})
// //         // console.log(nameInput);
// //         fireEvent.click(button);
// //         expect(addressInput.classList.contains('is-invalid')).toBe(true); // падает, супер
// //         // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
// //         // console.log(container.outerHTML);
// //         // console.log(container.innerHTML);

// //         // expect(container.textContent).toBe('example');
// //     });
// // });


// // describe('Форма заказа', () => {
// //     it('если в поле адреса не пусто, проверка не должна выставлять is-invalid', () => {
// //         const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;

// //         const { container, getByRole, getByLabelText } = render(form);


// //         const button = getByRole("button");
// //         const addressInput = getByLabelText('Address') as HTMLInputElement;
// //         fireEvent.change(addressInput, { target: { value: name}})
// //         // console.log(nameInput);
// //         fireEvent.click(button);
// //         expect(addressInput.classList.contains('is-invalid')).toBe(false); // падает, супер
// //         // expect(container.querySelector('.invalid-feedback')?.textContent).toBe('Please provide your name');
// //         // console.log(container.outerHTML);
// //         // console.log(container.innerHTML);

// //         // expect(container.textContent).toBe('example');
// //     });
// // });
