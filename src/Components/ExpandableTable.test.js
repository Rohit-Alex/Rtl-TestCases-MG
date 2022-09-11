/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import GeneralInfo from './GeneralInfo'
import { cleanup, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import ExpandableTable from './ExpandableTable'

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Expandable table', () => {

    it('Should render the expanded data', () => {
        render(<ExpandableTable />)
        const container = screen.getAllByRole('button', {
            name: /Expand row/i
        })[0]
        fireEvent.click(container)
    })
})