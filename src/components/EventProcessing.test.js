/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { cleanup, render, screen, waitForElementToBeRemoved } from '@testing-library/react'

import '@testing-library/jest-dom'
import EventProcessing from './EventProcessing'


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })
describe('Data enrichment test case', () => {

    it('Should render component properly', () => {
        const { container } = render(<EventProcessing data={{
            transactionStatus: 'CREATED',
            formula: 'formula',
            message: 'Hello message',
            custom: 'customValue'
        }} />)
        expect(screen.getByTestId('eventProcessing-test-id')).toBeInTheDocument()
        expect(container.getElementsByClassName('ant-descriptions audit-descriptions-common')[0]).toBeInTheDocument()
        expect(screen.getByRole('table')).toBeInTheDocument()
    })
})