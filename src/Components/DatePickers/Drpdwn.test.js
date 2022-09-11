/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

// import { act } from 'react-hooks-testing-library';
import { act } from '@testing-library/react-hooks'

import Drpdwn from './Drpdwn'
import userEvent from '@testing-library/user-event'

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Dropdown', () => {
    it('should open dropdown', async () => {
        render(<Drpdwn columnList={[
            { dataIndex: "one", title: "one", key: "1" },
            { dataIndex: "two", title: "two", key: "2" },
            { dataIndex: "three", title: "three", key: "3" }
        ]} />)
        const cont = screen.getByTestId('drpdwn')
        fireEvent.click(cont)
    })

    it.only('Should close the dropdown on clicked outside', () => {
        render(<Drpdwn columnList={[
            { dataIndex: "one", title: "one", key: "1" },
            { dataIndex: "two", title: "two", key: "2" },
            { dataIndex: "three", title: "three", key: "3" }
        ]} />)
        const cont = screen.getByTestId('drpdwn')
        fireEvent.click(cont)
        userEvent.click(document.body)

        // fireEvent.click(document)
    })
})