import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {TextInput} from './TextInput'

describe('<TextInput />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn()
        render(<TextInput handleChange={fn} searchValue={'testando'}/>)

        const input = screen.getByPlaceholderText(/type your search/i) as HTMLInputElement
        expect(input.value).toBe('testando')
    })

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue="um valor qualquer"/>);

        const input = screen.getByPlaceholderText(/type your search/i) as HTMLInputElement;
        const value = 'o valor';

        fireEvent.change(input, { target: { value: value } });

        expect(input.value).toBe(value);
    })

    it('should match snapshot', () => {
        const fn = jest.fn()
        const {container} = render(<TextInput handleChange={fn} searchValue=''/>)
        expect(container).toMatchSnapshot()
    })
})
