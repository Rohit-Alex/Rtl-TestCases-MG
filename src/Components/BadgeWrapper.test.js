/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import BadgeWrapper from './BadgeWrapper';


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Badge', () => {
    it('should render badge', () => {
        render(<BadgeWrapper visible={true} color="#fffff" text ="Badge"/>)
        const badgeDiv = screen.getByTestId('badge-testid')
        expect(badgeDiv).toBeInTheDocument()
    })

    it('Should render badge with proper text', () => {
        render(<BadgeWrapper visible={true} color="#fffff" text="Badge" />)
        const badgeDiv = screen.getByTestId('badge-testid')
        expect(badgeDiv.textContent).toBe("Badge")
    })  
})