/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DescriptionWrapper from '.'

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Description test case', () => {
    afterEach(() => cleanup())
    
    it('should show no descriptions when no data is passed to component', () => {
        render(<DescriptionWrapper boardered size="24px" title="My title" span={4} options={[]} />)
        expect(screen.getByText(/NO_DESCRIPTION_OPTIONS/i)).toBeInTheDocument()
        const imageContainer = screen.getByAltText(/NO_DESCRIPTION_OPTIONS/i)
        expect(imageContainer).toBeInTheDocument()
        expect(imageContainer.getAttribute('src')).toBe('simple')
    })

    it('should show view modal when data is passed', () => {
        const { container } = render(<DescriptionWrapper boardered size="24px" title="Description title" span={3} options={[{ label: 'condition', value: 'columnValue' }]} />)
        const titleContainer = container.getElementsByClassName('ant-descriptions-title')[0]
        expect(titleContainer).toBeInTheDocument()
        // description title
        expect(titleContainer.textContent).toBe('Description title')
        const columnContainer = container.getElementsByClassName('ant-descriptions-item')[0]
        expect(columnContainer.getAttribute('colspan')).toBe('3')
        //column title
        expect(screen.getByText(/condition/i)).toBeInTheDocument()

        // modal is present
        expect(screen.getByTestId('viewmodal-test-id')).toBeInTheDocument()
    })

    it('Should show badge in green when required data is passed', () => {
        render(<DescriptionWrapper boardered size="24px" title="Description title" span={1} options={[{ label: 'transactionTypeMode', value: 'created' }]} />)
        // modal should not be present
        expect(screen.queryByRole('viewmodal-test-id')).toBeNull()

        //column title
        expect(screen.getByText(/transactionTypeMode/i)).toBeInTheDocument()

        const badgeContainer = screen.getByTestId('badge-testid')
        expect(badgeContainer.className).toContain('green')

        //badge text content 
        expect(badgeContainer.textContent).toBe('created')
    })

    it('Should show badge in red when required data is passed', () => {
        const { container } = render(<DescriptionWrapper boardered size="24px" title="Description title" span={2} options={[{ label: 'transactionStatus', value: 'debited' }]} />)

        // modal should not be present
        expect(screen.queryByTestId('viewmodal-test-id')).toBeNull()

        //column title
        expect(screen.getByText(/transactionStatus/i)).toBeInTheDocument()
        const badgeContainer = screen.getByTestId('badge-testid')
        expect(badgeContainer.className).toContain('ant-tag-error')
        //badge text content 
        expect(badgeContainer.textContent).toBe('debited')
    })

    it('Should show column name as string', () => {
        const { container } = render(<DescriptionWrapper boardered size="24px" title="Description title" span={1} options={[{ label: 'custom', value: 'customValue' }]} />)
        // modal should not be present
        expect(screen.queryByTestId('viewmodal-test-id')).toBeNull()
        // badge should be not present
        expect(screen.queryByTestId('badge-testid')).toBeNull()

        //column label
        const columnLabel = container.getElementsByClassName('ant-descriptions-item-label')[0]
        expect(columnLabel.textContent).toBe('custom')

        //column content
        const columnContent = container.getElementsByClassName('ant-descriptions-item-content')[0]
        expect(columnContent.textContent).toBe('customValue')
    })

    it('Should exclude logLevel and message values', () => {
        render(<DescriptionWrapper boardered size="24px" title="Description title" span={1} options={{
            "transactionStatus": 'CREATED',
            "formula": 'formulaValue',
            "message": 'Hello message',
            "custom": 'customValue',
        }} />)

        // modal is present
        expect(screen.getByTestId('viewmodal-test-id')).toBeInTheDocument()

        //modal view button
        const button = screen.getByRole('button', { name: 'View' })
        expect(button).toBeInTheDocument()

        // badge is present
        const badgeContainer = screen.getByTestId('badge-testid')
        expect(badgeContainer.className).toContain('ant-tag-green')
        expect(screen.getByText(/transactionStatus/i)).toBeInTheDocument()
        expect(screen.getByText(/CREATED/i)).toBeInTheDocument()
        expect(screen.getByText(/customValue/i)).toBeInTheDocument()

        expect(screen.queryByText(/message/i)).toBeNull()
        expect(screen.queryByText(/Hello message/i)).toBeNull()
    })
})