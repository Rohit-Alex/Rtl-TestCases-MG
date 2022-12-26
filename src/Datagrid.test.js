/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import '@testing-library/jest-dom'

import DataGridDemo from './DataGrid'
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
// import { act, renderHook } from '@testing-library/react'


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Datagrid',() => {
    it('change page size', async () => {
        render(<DataGridDemo />)
        const reqbtn = await screen.findByRole('button', {
            name: /rows per page: 5/i
        })
        await act(async ()=> {
            await fireEvent.click(reqbtn)

        })
        const modal = await screen.findByRole('presentation')
        console.log(prettyDOM(modal))
        fireEvent.click(screen.getByRole('option', { name: /10/i }))
    })
})
