import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header';

/**
 * Working Enzyme
 */
describe(' Header Componet', () => {
    it('Should  have  4 NavLinks elements', () => {
        const wraper = shallow(<Header/>);
        expect(wraper.find('NavLink').length).toBe(4);
    })
});
