import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './home';

/**
 * Working Enzyme
 */
describe(' Home Page', () => {
    it('Should  be  Home text', () => {
        const wraper = shallow(<HomePage/>);
        expect(wraper.find('h1').length).toBe(1);
        expect(wraper.find('h1').text()).toBe('Home');
    })
});
