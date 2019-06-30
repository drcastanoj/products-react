
import React from 'react';
import { shallow } from 'enzyme';
import Icon from './icon';
import { cleanup, render } from '@testing-library/react';

/**
 * Working Enzyme and @testing-library/react
 */
describe(' Icon Component', () => {

    afterEach(cleanup)

    it('Should  have Font icon element ', () => {
        const wraper = shallow(<Icon icon='myIcon' />);
        expect(wraper.find('FontIcon').length).toBe(1);
    })


    it(' Should have input text ', () => {
        const { getByText } = render(<Icon icon='myIcon' />);
        getByText('myIcon')
    })
});
