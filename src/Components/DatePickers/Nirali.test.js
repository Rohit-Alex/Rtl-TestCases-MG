/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import Nirali from './Nirali';
// import { act } from 'react-hooks-testing-library';
import { renderHook, act } from '@testing-library/react-hooks'

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Nirali', () => {
    it('should clear start date', async () => {
        render(<Nirali />)
        const startDate = screen.getByPlaceholderText('SEARCH_START_DATE_PLACEHOLDER')
        fireEvent.mouseOver(startDate)
        const closeIcon = (screen.getAllByRole('img', { name: 'close-circle' })[0])?.parentElement
        await act(async () => {
            await fireEvent.mouseUp(closeIcon)
        })
        const endDate = screen.getByPlaceholderText("SEARCH_END_DATE_PLACEHOLDER");
        await fireEvent.mouseDown(endDate);
        await fireEvent.change(endDate, { target: { value: "2022-05-03" } });
        await act(async () => {
            fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[0]);
        })
        
    })
})