import React from 'react';
import { it, expect } from "@jest/globals";
import { fireEvent, render } from '@testing-library/react';
import { Form } from '../../src/client/components/Form';

const phoneWrong='шыплоыир';
const phoneRight = '8916101101';

describe('Форма заказа', () => {
    it('если в поле телефона введены буквы, должна срабатывать проверка', () => {
        const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;
        const { getByRole, getByLabelText } = render(form);
        const button = getByRole("button");
        const phoneInput = getByLabelText('Phone') as HTMLInputElement;
        fireEvent.change(phoneInput, { target: { value: phoneWrong}})
        fireEvent.click(button);
        expect(phoneInput.classList.contains('is-invalid')).toBe(true); // падает, супер
    });
    it('если в поле телефона введен правильный формат номера, проверка не должна выставлять is-invalid', () => {
        const form = <Form onSubmit={() => console.log('НУ САБМИТ')}/>;
        const { getByRole, getByLabelText } = render(form);
        const button = getByRole("button");
        const phoneInput = getByLabelText('Phone') as HTMLInputElement;
        fireEvent.change(phoneInput, { target: { value: phoneRight}})
        fireEvent.click(button);
        expect(phoneInput.classList.contains('is-invalid')).toBe(false); // падает, супер

    });
});
