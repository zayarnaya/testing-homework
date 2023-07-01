import React from 'react';

import { fireEvent, getByText, render } from '@testing-library/react';
import { Form } from '../../src/client/components/Form';

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
