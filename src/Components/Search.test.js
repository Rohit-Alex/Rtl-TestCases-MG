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
describe.only('Search', () => {
    it.only('Should render search component properly', async () => {
        render(<Search handleSearch={handleSearch}/>)

        //select mode from dropdown
        const select = document.querySelector('.ant-select-selector')
        fireEvent.mouseDown(select);
        const selectedOption = screen.getByText('Mode')

        //input the search value for mode type
        const inputField = screen.getByPlaceholderText('SEARCH_INPUT_PLACEHOLDER')

        //update the search value and filter value
        await act(async () => {
            await fireEvent.change(inputField, { target: { value: 'updated field value for number' } })
            await fireEvent.click(selectedOption)
        })

        //click the search button
        const searchButton = screen.getByRole('button', { name: 'Search' })
        fireEvent.click(searchButton)

        expect(handleSearch).toHaveBeenCalledWith('mode', 'updated field value for number')
    })

    it.only('Should call handleSearch when selected createdAt', async () => {
        render(<Search handleSearch={handleSearch} />)

        //select created at from dropdown
        const select = document.querySelector('.ant-select-selector')
        fireEvent.mouseDown(select);
        const selectedOption = screen.getByText('Transactions Created At')
        await act(async () => {
            await fireEvent.click(selectedOption)
        })

        //select start date from calender(start date)
        const startDate = screen.getByTestId("start-date");
        fireEvent.mouseDown(startDate);
        fireEvent.change(startDate, { target: { value: "10-12-2020" } });
        fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[0]);

        //select end date from calender(end date)
        const endDate = screen.getByTestId("end-date");
        fireEvent.mouseDown(endDate);
        fireEvent.change(endDate, { target: { value: "10-12-2021" } });
        fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[1]);

        // select search button
        const searchButton = screen.getByRole('button', { name: 'Search' })
        fireEvent.click(searchButton)
        expect(handleSearch).toHaveBeenCalledWith('createdAt', { "endDate": "2021-12-09T18:30:00.000Z", "startDate": "2020-12-09T18:30:00.000Z" })
    })
})