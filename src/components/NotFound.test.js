/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import NotFound from './NotFound';
configure({ adapter: new Adapter() });

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}))

describe('Not found test case', () => {
    afterEach(() => {
        cleanup();
    })

    it('Render component properly', () => {
        const { container } = render(<NotFound />)
        expect(container.firstChild.className).toBe('ant-result ant-result-404')
    })

    it('Should render button with correct text' , () => {
        const { container } = render(<NotFound />)
        const div = container.querySelector('Button')
        expect(div.textContent).toBe('BACK_HOME')
    })

 
})