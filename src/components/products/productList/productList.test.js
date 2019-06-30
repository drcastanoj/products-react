import { ProductList } from "./productList";
import React from 'react';
import { mount } from 'enzyme';
import { products } from '../../../../tools/mockData'

const actions = {
    loadProducts: () => { }
};
function renderComponent(args) {
    const defaultProps = {
        actions,
        products,
        categorySelected: ''
    }
    const props = { ...defaultProps, ...args };
    return mount(<ProductList {...props} />);
}

describe('ProductList Component', () => {

    it('should not call action loadProudct is there are products ', () => {
        jest.spyOn(actions, 'loadProducts');
        renderComponent();
        expect(actions.loadProducts).toHaveBeenCalledTimes(0);
    });


    it('should not call action loadProudct is there are not products', () => {
        jest.spyOn(actions, 'loadProducts');
        renderComponent({ products: [] });
        expect(actions.loadProducts).toHaveBeenCalled();
    });

    it('should not have CardProduct ', () => {
        const component = renderComponent({ products: [] });
        expect(component.find('CardProduct').length).toBe(0);
    });

    it('should have CardProducts without filter', () => {
        const component = renderComponent();
        expect(component.find('CardProduct').length).toBe(10);
    });

    it('should have CardProducts with filter Tech', () => {
        const component = renderComponent({categorySelected: 'Tech'});
        expect(component.find('CardProduct').length).toBe(7);
    });

    it('should have CardProducts with filter Services ', () => {
        const component = renderComponent({categorySelected: 'Services'});
        expect(component.find('CardProduct').length).toBe(5);
    });

})
