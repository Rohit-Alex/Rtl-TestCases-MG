/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TimeLineDetails from './Timeline'
import { POST1 } from '../utils'

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Timeline test case', () => {
    it('Should render Event processing', () => {
        render(<TimeLineDetails value={{
            boardered: true, size: "24px", title: "Description title", options: {
                "transactionStatus": 'CREATED',
                "formula": 'formulaValue',
                "message": 'Hello message',
                "custom": 'customValue',
            }
        }} traceKey='EVENT_PROCESSING' />)
        expect(screen.getByTestId('TimeLine-test-id')).toBeInTheDocument()
        expect(screen.getByTestId('eventProcessing-test-id')).toBeInTheDocument()
    })

    it('Should render Rules evaluation', () => {
        const data = {
            transactionKey: [{ ruleName: 'rule1', transactionNumber: '1234', logLevel: 'success', message: 'Alert message', isBestFit: true }]
        }
        render(<TimeLineDetails value={data} traceKey='RULE_COMPUTATION' />)
        expect(screen.getByTestId('TimeLine-test-id')).toBeInTheDocument()
        expect(screen.getByTestId('rule-computation-testid')).toBeInTheDocument()
    })
})

it('should call controller abort', async () => {
    jest.setTimeout(1000)
    let res
    try {
        await POST1("https://seller-settlements-staging.osmos.services/processor/v1/transactions/search", '3242342sdas', { vashuda: 'Tiwari' }, 60)
    } catch (err) {
        res = err
    }
    expect(res).toEqual({ code: 'TIME_OUT', message: 'RESPONSE_TIME_OUT' })
})
