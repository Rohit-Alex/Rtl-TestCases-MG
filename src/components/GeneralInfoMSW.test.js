/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import GeneralInfo from './GeneralInfo'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'


//with msw
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { act } from 'react-dom/test-utils'
const generalInfoResponse = rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            generalInfo: {
                "formula": '{"formula":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                nirali: 'mg',
                transactionStatus: true
            }
        })
    )
})
const server = setupServer(generalInfoResponse)

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })
beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe("Test GeneralInfo component", () => {
    it('Should show loader till data is fetched', async () => {
        act(() => {
            render(<GeneralInfo />)
        })
        expect(screen.getByTestId('generalInfo-testid')).toBeInTheDocument()
        expect(screen.getByTestId('spinner-container')).toBeInTheDocument()
        await waitForElementToBeRemoved(() => screen.queryByTestId('spinner-container'))
    })

    it('using msw after data("CREATED" badge) fetch', async () => {
        await act(async () => {
            render(<GeneralInfo />)
        })
        expect(await screen.findByText('formula')).toBeInTheDocument()
        expect(await screen.findByTestId('viewmodal-test-id')).toBeInTheDocument()
        const tableContainer = await screen.findByRole("table")
        expect(tableContainer.textContent).toContain('mg')
        expect(tableContainer.textContent).toContain('nirali')
        const badgeContainer = await screen.findByTestId('badge-testid')
        expect(badgeContainer.textContent).toBe('CREATED')
    })

    it('using msw after data("NOT_CREATED" badge) fetch', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
                return res(
                    ctx.status(200),
                    ctx.json({
                        generalInfo: {
                            "condition": '{"condition":{"expressionSet":{"operator":"*","operands":[{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}}',
                            transactionStatus: false
                        }
                    })
                )
            })
        )
        await act(async () => {
            render(<GeneralInfo />)
        })
        expect(await screen.findByText('condition')).toBeInTheDocument()
        expect(await screen.findByText('transactionStatus')).toBeInTheDocument()
        expect(await screen.findByTestId('viewmodal-test-id')).toBeInTheDocument()
        expect(await screen.findByRole("table")).toBeInTheDocument()
        const badgeContainer = await screen.findByTestId('badge-testid')
        expect(badgeContainer.textContent).toBe('NOT_CREATED')
    })

    it('Should handle failures', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
                return res(
                    ctx.status(400),
                )
            })
        )
        await act(async () => {
            render(<GeneralInfo />)
        })
        const tableContainer = await screen.findByRole("table")
        expect(tableContainer.textContent).toContain('transactionStatus')
        const badgeContainer = await screen.findByTestId('badge-testid')
        expect(badgeContainer.textContent).toBe('NOT_CREATED')
    })
})
