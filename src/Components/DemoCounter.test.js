/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import DemoCounter from './DemoCounter'
import { DemoCounterProvider, useDemoCounterContext } from '../Context/DemoContex'



window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })
jest.mock('../Context/DemoContex')

describe.only('Demo counter', () => {
    beforeEach(() => {
        useDemoCounterContext.mockReturnValue({
            count: 0,
            message: 'Hi',
            increment: jest.fn(),
            reset: jest.fn()
        })
    })
    it('should render component', () => {
        render(
                <DemoCounter />
        )
    })
})