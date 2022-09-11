/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { render, screen, act, fireEvent } from '@testing-library/react'
import Search from './Search'
import '@testing-library/jest-dom'


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

var handleSearch = jest.fn((a, b) => console.log(a, 'a', b , 'b'))
describe('Search', () => {
    it('Should render search component properly', async () => {
        render(<Search handleSearch={handleSearch}/>)

        //select mode from dropdown
        const select = document.querySelector('.ant-select-selector')
        fireEvent.mouseDown(select);
        const selectedOption = screen.getByText('Transactions Type Mode')

        //input the search value for mode type
        const inputField = screen.getByPlaceholderText('SEARCH_INPUT_PLACEHOLDER')

        //update the search value and filter value
        act(async () => {
            fireEvent.change(inputField, { target: { value: 'Debit' } })
            fireEvent.click(selectedOption)
        })

        //click the search button
        const searchButton = screen.getByRole('button', { name: 'Search' })
        fireEvent.click(searchButton)

        expect(handleSearch).toHaveBeenCalledWith('mode', 'updated field value for number')
    })

    it('Should call handleSearch when selected createdAt', async () => {
        render(<Search handleSearch={handleSearch} />)

        //select created at from dropdown
        const select = document.querySelector('.ant-select-selector')
        fireEvent.mouseDown(select);
        const selectedOption = screen.getByText('Transactions Created At')
        await act(async () => {
            await fireEvent.click(selectedOption)
        })

        //select start date from calender(start date)
        const startDate = screen.getByPlaceholderText('SEARCH_START_DATE_PLACEHOLDER')
        fireEvent.mouseDown(startDate)
        fireEvent.change(startDate, { target: { value: "2020-12-20" } });
        await act(async () => {
            fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[0]);
        })

        const endDate = screen.getByPlaceholderText("SEARCH_END_DATE_PLACEHOLDER");
        await fireEvent.mouseDown(endDate);
        await fireEvent.change(endDate, { target: { value: "2023-02-20" } });
        await act(async () => {
            fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[1]);
        })
        endDate.setAttribute('value', '')

        const crossIcon = document.querySelectorAll(".ant-picker-clear")[0]
        await act(async () => {
            await fireEvent.click(crossIcon)
            await fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[0]);
        })


        // select search button
        const searchButton = screen.getByTestId('search-button-testid')
        await act(async () => {
            await fireEvent.click(searchButton)
        })
        expect(handleSearch).toHaveBeenCalled()
    })
})