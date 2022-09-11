import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import DebounceMethod from './DebounceMethod';

configure({ adapter: new Adapter() });

window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Test for debouncing', () => {
    jest.useFakeTimers()
    it('Should call debounced method', () => {
        const wrapper = shallow(<DebounceMethod />)
        const input = wrapper.find('Input')
        input.simulate('change', { target: { value: "spam" } })
        jest.advanceTimersByTime(500)
    })
})