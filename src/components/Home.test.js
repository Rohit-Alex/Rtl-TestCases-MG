/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

    describe.only('Home test case', () => {
        it('should render component completely', () => {
            render(<Home />)
            expect(screen.getByTestId('Home-test-id')).toBeInTheDocument()
        })

        it('render component', () => {
            render(<Home />)
            expect(screen.getByTestId('Home-test-id')).toBeInTheDocument()
            expect(screen.getAllByTestId('alert-test-id')[0]).toBeInTheDocument()
            expect(screen.getAllByTestId('alert-test-id')[0].textContent).toBe('No Rules Found, categoryId not received from the event, received attribute value null, Exception thrown')
            expect(screen.getAllByRole('img')[0].getAttribute('aria-label')).toBe('exclamation-circle')
            expect(screen.getAllByTestId('Timeline-color-test-id')[0]).toBeInTheDocument()
            
            const timelineColorNodes = screen.getAllByTestId('timeline-css')

            expect(timelineColorNodes[0].className).toContain('blue')
            expect(timelineColorNodes[0].textContent).toContain('EVENT_PROCESSING')

            expect(timelineColorNodes[1].className).toContain('blue')
            expect(timelineColorNodes[1].textContent).toContain('RULES_TRIGGERED')

            expect(timelineColorNodes[2].className).toContain('blue')
            expect(timelineColorNodes[2].textContent).toContain('DATA_ENRICHMENT')

            expect(timelineColorNodes[3].className).toContain('blue')
            expect(timelineColorNodes[3].textContent).toContain('RULE_EVALUATION')

            expect(timelineColorNodes[4].className).toContain('red')
            expect(timelineColorNodes[4].textContent).toContain('RULE_COMPUTATION')

            expect(timelineColorNodes[5].className).toContain('gold')
            expect(timelineColorNodes[5].textContent).toContain('TRANSACTION_CREATION')

            expect(screen.getAllByTestId('TimeLine-test-id')[0]).toBeInTheDocument()
            // screen.debug()
        })
    })