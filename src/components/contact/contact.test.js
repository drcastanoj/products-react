import React from 'react';
import { shallow } from 'enzyme';
import { ContactPage } from './contac';

function renderCourseForm(args) {
    return shallow(<ContactPage />)
}
/**
 * Working Enzyme
 */
describe(' Contact Page', () => {
    it('Should  be  Contact text', () => {
        const wraper = renderCourseForm();
        expect(wraper.find('h1').length).toBe(1);
        expect(wraper.find('h1').text()).toBe('Contact');
    })
});
