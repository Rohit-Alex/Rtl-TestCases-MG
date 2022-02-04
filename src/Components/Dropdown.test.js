/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import DropdownList from './Dropdown'
import { columnList } from '../utils'


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })
const selectedValue = columnList.map((e) => e.dataIndex)
const handleChangeCheckbox = jest.fn(x => x)

    describe.only('Dropdown list', () => {
        it('should render dropdownlist', () => {
            render(<DropdownList columnList={columnList} selectedValue={selectedValue} handleChangeCheckbox={handleChangeCheckbox} />)
            const dropdownContainer = screen.getByRole('button', {
                name: /profile/i
            })
            fireEvent.click(dropdownContainer);
            const sellerOrderId = screen.getAllByTestId('traceId-data-testid')
            fireEvent.click(sellerOrderId[0])
            expect(handleChangeCheckbox).toBeCalledWith(["number", "name", "mode", "netAmount", "sellerId", "sellerOrderLineId", "createdAt"])
        })
        
    })