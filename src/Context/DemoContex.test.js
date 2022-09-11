/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import { DemoCounterProvider, useDemoCounterContext } from './DemoContex'
import { CounterProvider } from './Counter'
import { fetchMethod } from '../utils'
// import { act, renderHook } from '@testing-library/react'

jest.mock('../utils')

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('contex test', () => {
    let wrapper
    beforeEach(() => {
        wrapper = ({ children }) => <CounterProvider><DemoCounterProvider>{children}</DemoCounterProvider></CounterProvider>
    })
    afterEach(() => jest.clearAllMocks())
    it('Should increase count', async () => {
        const { result } = await renderHook(() => useDemoCounterContext(), {
            wrapper
        })
         fetchMethod.mockReturnValue({
                    items: ['one']
            })
        await act(async () => {
            await result.current.increment()
        })
        expect(result.current.count).toBe(1)
        expect(result.current.dataApi).toStrictEqual(['one'])
        expect(result.current.message).toBe('HI ALEX')
        expect(result.current.isLoading).toBe(false)
    })
})
