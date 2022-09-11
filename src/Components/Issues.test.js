/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Issues from './Issues'
import { useCounterContext } from '../Context/Counter'
// import { RoleProvider, useRoleContext } from '../Context/TempContext'

// jest.mock("../Context/TempContext")
jest.mock("../Context/Counter")
describe('Issues', () => {
    beforeEach(() => {
        // useRoleContext.mockReturnValue({
        //     role: ["read"]
        // })
        useCounterContext.mockReturnValue({
            permission: true
        })
    })
    it('Should show tabs data', () => {
        render(<Issues />)
    })

    it('Should show error message', () => {
        useCounterContext.mockReturnValue({
            permission: false
        })
        render(<Issues />)
    })
})