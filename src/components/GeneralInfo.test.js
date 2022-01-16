/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import GeneralInfo from './GeneralInfo'
import { cleanup, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import { fetchMethod } from '../utils'
import { act } from 'react-dom/test-utils'


jest.mock('../utils')

// jest.mock('../utils', () => ({
//     ...jest.requireActual('../utils'),
//     fetchMethod: () => Promise.resolve({
//         // json: () => Promise.resolve({
//         //     generalInfo: {
//         //         options: [{ label: 'label1', value: 'customValue1' }],
//         //         transactionStatus: true
//         //     }
//         // })
//         generalInfo: {
//             options: [{ label: 'label1', value: 'customValue1' }],
//             transactionStatus: true
//         }
//     })
// }));


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe("Test GeneralInfo component", () => {


    afterEach(() => {
        cleanup()
        fetchMethod.mockReset()
    })


    it('should show loader till data is fetched', async () => {
        act(() => {
            render(<GeneralInfo />)
        })
        expect(screen.getByTestId('generalInfo-testid')).toBeInTheDocument()
        expect(screen.getByTestId('spinner-container')).toBeInTheDocument()
        await waitForElementToBeRemoved(() => screen.queryByTestId('spinner-container'))
    })

    it('should show data(CREATED) when data is fetched created', async () => {
        await act(async () => {
            fetchMethod.mockReturnValue({
                generalInfo: {
                    "formula": '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                    transactionStatus: true
                }
            })
            render(<GeneralInfo />)
        })
        expect(screen.getByTestId('generalInfo-testid')).toBeInTheDocument()
        expect(screen.getByText('formula')).toBeInTheDocument()
        expect(screen.getByTestId('viewmodal-test-id')).toBeInTheDocument()
        expect(screen.getByText('General Information')).toBeInTheDocument()
        expect(screen.getByRole("table")).toBeInTheDocument()
        expect(screen.getByTestId('badge-testid').textContent).toBe('CREATED')
        // await waitFor(() => {
        //     expect(screen.getByRole("table")).toBeInTheDocument()
        //     expect(screen.getByText('CREATED')).toBeInTheDocument()
        // })
    })

    it('should show data(NOT_CREATED) when data is fetched not created', async () => {
        await act(async () => {
            fetchMethod.mockReturnValue({
                generalInfo: {
                    customKey: 'customValue',
                    transactionStatus: false
                }
            })
            render(<GeneralInfo />)
        })
        expect(screen.getByTestId('generalInfo-testid')).toBeInTheDocument()
        expect(screen.getByText('General Information')).toBeInTheDocument()
        expect(screen.getByRole("table")).toBeInTheDocument()
        expect(screen.getByText('customKey')).toBeInTheDocument()
        expect(screen.getByText('customValue')).toBeInTheDocument()
        expect(screen.getByTestId('badge-testid').textContent).toBe('NOT_CREATED')
        // await waitFor(() => {
        //     const dataContainer = screen.getByRole("table")
        //     expect(screen.getByText('NOT_CREATED')).toBeInTheDocument()
        //     expect(dataContainer).toBeInTheDocument()
        // })
    })
})
