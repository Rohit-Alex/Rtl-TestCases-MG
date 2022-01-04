import React from 'react'
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

describe('App', ()=> {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<App />) 
    })
    it('show loader till data is fetched', ()=> {
        console.log(wrapper.debug())
    })
})