/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { act } from 'react-hooks-testing-library'
import userEvent from '@testing-library/user-event'
import { format, subDays } from 'date-fns'


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('App test case considering date-range-type', () => {
    it('Should show date-range of react and apply the selected start and end dates', async () => {
        const endDate = new Date()
        const formattedEndDate = format(endDate, 'eeee, MMMM do, yyyy')
        render(<App />)
        const dateDiv = screen.getByTestId('date-range')
        act(() => {
            fireEvent.click(dateDiv)
        })
        
        const backBtn = screen.getAllByRole('button', { name: 'ICON1' })[0]
        fireEvent.click(backBtn)

        const date1 = screen.getByRole('option', { name: `Choose Tuesday, February 22nd, 2022` })
        fireEvent.click(date1)

        const date2 = screen.getByRole('option', { name: `Choose ${formattedEndDate}` })
        fireEvent.click(date2)
    })
})
