/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmptyWrapper from './Empty';

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Empty wrapper', () => {
    it('should render component with default image', () => {
        const { container } = render(<EmptyWrapper description={<span>Default image</span>} image='default' />)
        const div = screen.getByTestId('empty-testId')
        expect(container.getElementsByClassName("ant-empty-img-default")[0]).toBeInTheDocument()
        expect(div.textContent).toBe("Default image")
    })

    it('should render component with simple image', () => {
        const { container } = render(<EmptyWrapper description={<span>Simple image</span>} image='simple' />)
        const div = screen.getByTestId('empty-testId')
        expect(container.getElementsByClassName("ant-empty-img-simple")[0]).toBeInTheDocument()
        expect(div.textContent).toBe("Simple image")
    })

    it('should render component with different image', () => {
        render(<EmptyWrapper description={<span>Different image</span>} image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />)
        const div = screen.getByTestId('empty-testId')
        const imageContainer = screen.getByRole('img')
        expect(imageContainer.src).toContain('https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg');
        expect(div.textContent).toBe("Different image")
    })
})