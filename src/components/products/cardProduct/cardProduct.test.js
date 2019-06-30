
import React from 'react';
import { mount } from 'enzyme';
import CardProduct from './cardProduct';
import { products } from '../../../../tools/mockData'

const productMock = products[0];
function renderCardProduct(args) {
    const defaultProps = {
        product: productMock
    }
    const props = { ...defaultProps, ...args };
    return mount(<CardProduct {...props} />);
}

/**
 * Working Enzyme and @testing-library/react
 */
describe('CardProduct Component', () => {


    it('Should  be title text with name  ', () => {
        const element = renderCardProduct().find('h2');
        expect(element.length).toBe(1);
        expect(element.text()).toBe(productMock.name);
    })

    it('Should  be convert categories and brand text   ', () => {
        const element = renderCardProduct().find('h3');
        expect(element.length).toBe(1);
        expect(element.text()).toBe('Tech, Services - Hirthe - Pacocha');
    })
    it('Should  be description text', () => {
        const element = renderCardProduct().find('.card-content__description__text');
        expect(element.length).toBe(1);
        expect(element.text()).toBe(productMock.description);
    })

    it('Should  be description text', () => {
        const element = renderCardProduct().find('.card-content__description__text');
        expect(element.length).toBe(1);
        expect(element.text()).toBe(productMock.description);
    })

});
