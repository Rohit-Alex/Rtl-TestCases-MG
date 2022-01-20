/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import Home from './src/components/Pages/Home'
import { render, screen } from '@testing-library/react'



window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

    describe('Home', () => {

        it('Should render component', () => {
            render(<Home />)
            expect(screen.queryByTestId('home-testid')).not.toBeInTheDocument()
            screen.debug()
        })
    })