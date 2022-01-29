/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TimeLineDetails from './Timeline'

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
        render(<TimeLineDetails value={{ boardered: true, size: "24px", title: "Description title", options:{
            "transactionStatus": 'CREATED',
            "formula": 'formulaValue',
            "message": 'Hello message',
            "custom": 'customValue',
        }}} traceKey='EVENT_PROCESSING'/>)
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