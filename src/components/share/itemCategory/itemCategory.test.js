
import React from 'react';
import { shallow } from 'enzyme';
import { cleanup, render } from '@testing-library/react';
import ItemCategory from './itemCategory';

/**
 * Working Enzyme and @testing-library/react
 */
describe('ItemCategory Component', () => {

    afterEach(cleanup)

    it('Should  have ListItem element ', () => {
        const wraper = shallow(<ItemCategory isSelected icon='myIcon' name='myName' />);
        expect(wraper.find('ListItem').length).toBe(1);
    })

    it('Should  have .item-category__content--active if isSelected ', () => {
        const wraper = shallow(<ItemCategory isSelected icon='myIcon' name='myName' />);
        expect(wraper.find('.item-category__content--active').length).toBe(1);
    })

    it('Should NOT  have .item-category__content--active if isSelected ', () => {
        const wraper = shallow(<ItemCategory icon='myIcon' name='myName' />);
        expect(wraper.find('.item-category__content--active').length).toBe(0);
    })

    it(' Should be input icon text ', () => {
        const { getByText } = render(<ItemCategory isSelected icon='myIcon' name='myName' />);
        getByText('myIcon')
    })

    it(' Should be input icon text ', () => {
        const { getByText } = render(<ItemCategory isSelected icon='myIcon' name='myName' />);
        getByText('myName')
    })
});
