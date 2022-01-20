/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import BackToTop from './BackTop';

const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};
window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

    describe('Should render backtop', () => {
        it('render component', () => {
            render(<BackToTop visibilityHeight={400} duration={200} children={<div style={style}>UP</div>}/>)
            const divContainer = screen.getByTestId("back-top-testId")
            expect(divContainer).toBeInTheDocument()
        })

        it('Should render component with corrent props', () => {
            render(<BackToTop visibilityHeight={400} duration={200} children={<div style={style}>UP</div>} />)
            const divContainer = screen.getByTestId("back-top-testId")
            expect(divContainer.getAttribute("duration")).toBe("200")
        })
    })