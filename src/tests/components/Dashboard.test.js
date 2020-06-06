import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../../components/Dashboard'

describe('<ExpenseDashboard />', () => {
    it('Should render Dashboard correctly', () => {
        const wrapper = shallow(<Dashboard />)
        expect(wrapper).toMatchSnapshot()
    })

})