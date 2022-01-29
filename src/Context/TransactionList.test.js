/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import '@testing-library/jest-dom'
import { useTransactionSearchContext } from './TransactionData'
import TransactionList from '../Components/TransactionList'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { wait } from '@testing-library/user-event/dist/utils'

jest.mock('./TransactionData')

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

var getTransactionSearchMock = jest.fn()

describe.only('Transaction list test case', () => {
    beforeEach(() => {
        useTransactionSearchContext.mockReturnValue({
            isLoading: false,
            transactionData: [],
            pagination: {},
            getTransactionSearch: getTransactionSearchMock,
            resetDataOnSearch: jest.fn(),
        })
    })

    afterEach(() => {
        useTransactionSearchContext.mockReset()
        cleanup()
    })

    it('Should show loader over table till data loads', () => {
        useTransactionSearchContext.mockReturnValue({
            isLoading: true,
            transactionData: [],
            pagination: {},
            getTransactionSearch: getTransactionSearchMock,
            resetDataOnSearch: jest.fn(),
        })

        const { container } = render(<TransactionList />)
        expect(container.getElementsByClassName("ant-spin-nested-loading")[0]).toBeInTheDocument()
    })

    it('Should render the component properly with data', async () => {
        useTransactionSearchContext.mockReturnValue({
            isLoading: false,
            transactionData: [{
                transactionId: "26f3d4d4-0bfd-44c6-9e82-af997a172c8a",
                tenant: "5f66269c-6d96-48fb-abe0-e91ae769c54c",
                number: "FALABELLA_CHILE-CLP-01042022-eVtoKsaojU",
                name: "SHIPPING_FEE_ITEM_LEVEL",
                sellerId: "FALABELLA_CHILE",
                transactionTypeId: "4979bd1a-36ff-11ec-b0b4-42010a18002c",
                settlementId: "f0ed8754-6d5d-11ec-9eb2-42010a18003c",
                parentRuleId: "b01afa06-4602-460a-af4e-568ed9e1d0d5",
                netAmount: {
                    currency: "CLP",
                    centAmount: 0,
                    fraction: 1,
                },
                status: "CURRENT",
                audit: {
                    apiVersion: "1",
                    createdAt: "2022-01-04T13:01:13.777043Z",
                    createdBy: "185fead9-87b9-48b3-b507-79d359a17ba9",
                    lastModifiedAt: "2022-01-04T13:01:13.777043Z",
                    lastModifiedBy: "185fead9-87b9-48b3-b507-79d359a17ba9",
                },
                details: {
                    orderId: "e48ff73d-e5f7-427b-8184-fd69571796eb",
                    sellerOrderLineId: "199cf5d5-7816-4901-991f-85476d81edca",
                    sellerSkuId: "2218800",
                    productId: "2218800",
                    variantId: "2218800",
                    offerId: "2218800",
                },
                source: "SETTLEMENTS_DOMAIN",
                mode: "debit",
                traceId: "a2425a56-469f-445b-8321-ce4f747cd156",
                eventId: "2c7f2b8b-2740-47cb-a26d-bb441b55cff9",
                entityType: "sellerOrderLine",
                entityId: "199cf5d5-7816-4901-991f-85476d81edca",
            }],
            pagination: { totalPages: 2 },
            getTransactionSearch: getTransactionSearchMock,
            resetDataOnSearch: jest.fn(),
        })
        await act(async () => 
            await render(<TransactionList />)
        )
        await wait(async () =>
            await screen.findByText('SHIPPING_FEE_ITEM_LEVEL')
        )
        await wait(async () => {
            await screen.findByRole('link', { name: 'VIEW' })
        })
    })

    it('Should render search component properly', async () => {
        await act(async () =>
            await render(<TransactionList />)
        )
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
        await act(async () => {
            await fireEvent.click(searchButton)
        })
        expect(getTransactionSearchMock).toHaveBeenCalled()
    })

    it('Should call handleSearch when selected createdAt', async () => {
        await act(async () =>
            await render(<TransactionList />)
        )
        //select created at from dropdown
        const select = document.querySelector('.ant-select-selector')
        fireEvent.mouseDown(select);
        // screen.debug()
        const selectedOption = screen.getByText('Transactions Created At')
        // console.log(selectedOption);
        await act(async () => {
            await fireEvent.click(selectedOption)
        })

        //select start date from calender(start date)
        const startDate = screen.getByPlaceholderText('SEARCH_START_DATE_PLACEHOLDER')
        fireEvent.mouseDown(startDate);
        fireEvent.change(startDate, { target: { value: "10-12-2020" } });
        const div = document.querySelectorAll(".ant-picker-cell-selected")[0]
        fireEvent.click(div);

        //select end date from calender(end date)
        const endDate = screen.getByTestId("end-date");
        fireEvent.mouseDown(endDate);
        fireEvent.change(endDate, { target: { value: "10-12-2021" } });
        fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[1]);

        // select search button
        const searchButton = screen.getByTestId('search-button-testid')
        await act(async () => {
            await fireEvent.click(searchButton)
        })
        expect(getTransactionSearchMock).toHaveBeenCalled()
    })

    it('Should hide table column data on changing column filter', async () => {
        await act(async () =>
            await render(<TransactionList />)
        )
        const dropdownContainer = screen.getByRole('button', {
            name: /profile/i
        })
        fireEvent.click(dropdownContainer);
        const traceIdDiv = screen.getAllByTestId('traceId-data-testid')
        await act( async () => {
            await fireEvent.click(traceIdDiv[0])
        })
        expect(screen.queryByRole('columnheader', {
            name: 'Trace Id'
        })).not.toBeInTheDocument()
    })
})