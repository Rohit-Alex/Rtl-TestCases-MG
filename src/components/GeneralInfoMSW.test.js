/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import GeneralInfo from './GeneralInfo'
import { render, screen } from '@testing-library/react'
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
                niralli: 'mg',
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

describe("Test GeneralInfo component", () => {

    beforeAll(() => server.listen())

    afterEach(() => server.resetHandlers())

    afterAll(() => server.close())

    it('using msw after data fetch', async () => {
        await act(async () => {
            render(<GeneralInfo />)
        })
        screen.debug()
    })
})
