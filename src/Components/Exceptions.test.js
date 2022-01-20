import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Exceptions from './Exceptions'


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Exceptions test case', () => {
    afterEach(() => cleanup())
    const props = {
        data: {
            message: 'Success Text',
            logLevel: 'warn'
        }
    }
    it('Should render component properly', () => {
        render(<Exceptions exceptions={props}/>)
        expect(screen.getByTestId('alert-test-id')).toBeInTheDocument()
    })

    it('Should show warning icon', () => {
        render(<Exceptions exceptions={props}/>)
        expect(screen.getByRole('img').className).toBe('anticon anticon-exclamation-circle ant-alert-icon')
    })
})