import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ViewModalHandler from './ViewModal'


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })
describe('View modal test', () => {
    afterEach(() => cleanup())

    it('Should render  properly', () => {
        render(<ViewModalHandler modalLabel="Custom modal" modalValue={''}/>)
        expect(screen.getByTestId('viewmodal-test-id')).toBeInTheDocument()
    })

    it('Should render button with correct text' , () => {
        render(<ViewModalHandler modalLabel="Custom modal" modalValue={''} />)
        const button = screen.getByRole('button', { name: 'View' })
        expect(button).toBeInTheDocument()
    })

    it('Should open modal when clicked on view button' , () => {
        render(<ViewModalHandler modalLabel="Custom modal" modalValue={'{"ruleset":{"operator":"and","rules":[{"key":"$/profile/geography","operator":"==","value":{"singleValue":"National"},"valueType":"String","specificType":"String","attributeType":"SYSTEM"},{"key":"$/data/sellerOrder/totals[?(@/type=="SHIPPING_TOTAL")]/amount","operator":"<","value":{"singleValue":"20000"},"valueType":"Number","specificType":"Money","attributeType":"SYSTEM"}]}}'} />)
        const button = screen.getByRole('button', { name: 'View' })
        expect(screen.queryByRole('dialog')).toBeNull()
        fireEvent.click(button)
        expect(screen.getByRole('dialog')).toBeInTheDocument()
        expect(screen.getByText('Custom modal')).toBeInTheDocument()
        const closeButton = screen.getByRole('button', {name: 'CLOSE'})
        fireEvent.click(closeButton)
        expect(screen.queryByRole('dialog')).toBeNull()

        // expect(container.findElementsByClassName('react-json-view')).toBeInTheDocument()
    })

})