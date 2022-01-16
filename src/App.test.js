/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react'

import { render, screen, act } from '@testing-library/react'
import App from './App'
window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('App', () => {
   it.skip('render component', () => {

   })
})
