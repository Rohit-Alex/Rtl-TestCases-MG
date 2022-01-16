/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HorizontalCards from './HorizontalCards'

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Horizontal card test case', () => {

    const setup = (options) => {
        return render(<HorizontalCards options={options} />)
    }
    
    afterEach(() => cleanup())
    it('should render component with badge of magenta color', () => {
        const { container } = setup([{ ruleName: 'rule1', transactionNumber: '1234', logLevel: 'success', message: 'Alert message', isBestFit: true }])
        expect(screen.getByTestId('site-card-wrapper')).toBeInTheDocument()

        const ribbonWrapper = container.getElementsByClassName('ant-ribbon-wrapper')[0]
        expect(ribbonWrapper).toBeInTheDocument()
        expect(ribbonWrapper.lastChild.className).toContain('ant-ribbon-color-magenta')
        expect(ribbonWrapper.lastChild.textContent).toBe('BESTFIT')

        expect(ribbonWrapper.firstChild.className).toContain('ant-card-hoverable')

        expect(container.getElementsByClassName('ant-card-head-title')[0].textContent).toBe('rule1')

        expect(container.getElementsByClassName('ant-space ant-space-vertical')[0]).toBeInTheDocument()
        
        const alertContainer = screen.getByRole('alert')
        expect(alertContainer.className).toContain('ant-alert-success')
        expect(alertContainer.textContent).toBe('Alert message')
        const alertIcon = screen.getByRole('img')
        expect(alertIcon.getAttribute('aria-label')).toBe('check-circle')

        const descriptionContainer = screen.getByRole('table')
        expect(descriptionContainer.textContent).not.toContain('rule1')
        expect(descriptionContainer.textContent).not.toContain('BESTFIT')
        expect(descriptionContainer.textContent).toContain('transactionNumber')
        expect(descriptionContainer.textContent).toContain('1234')
    })

    it('should render component with badge of yellow color', () => {
        const { container } = setup([{ transactionNumber: '1234', logLevel: 'warn', message: 'Warning', isRuleIgnored: true }])

        const ribbonWrapper = container.getElementsByClassName('ant-ribbon-wrapper')[0]
        expect(ribbonWrapper).toBeInTheDocument()
        expect(ribbonWrapper.lastChild.className).toContain('ant-ribbon-color-yellow')
        expect(ribbonWrapper.lastChild.textContent).toBe('IGNORED')

        const alertContainer = screen.getByRole('alert')
        expect(alertContainer.className).toContain('ant-alert-warning')
        expect(alertContainer.textContent).toBe('Warning')

        const alertIcon = screen.getByRole('img')
        expect(alertIcon.getAttribute('aria-label')).toBe('exclamation-circle')

        expect(container.getElementsByClassName('ant-card-head-title')[0].textContent).toBe('1234')

        const descriptionContainer = screen.getByRole('table')
        expect(descriptionContainer.textContent).not.toContain('IGNORED')
        expect(descriptionContainer.textContent).toContain('transactionNumber')
        expect(descriptionContainer.textContent).toContain('1234')
    })

    it('Should render component without badge ribbon', () => {
        const { container } = setup([{ transactionNumber: '1234', logLevel: 'error', message: 'Error', isRuleIgnored: false }])

        const ribbonWrapper = container.getElementsByClassName('ant-ribbon-wrapper')
        expect(ribbonWrapper.length).toBe(0)

        const alertContainer = screen.getByRole('alert')
        expect(alertContainer.className).toContain('ant-alert-error')
        expect(alertContainer.textContent).toBe('Error')
    })
})