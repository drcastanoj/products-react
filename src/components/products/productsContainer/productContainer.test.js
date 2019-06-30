import { ProductsContainer } from "./productsContainer";
import React from 'react';
import { shallow } from 'enzyme';

const actions = {
    categoryIsSelected: () => { }

};
function renderComponent(args) {
    const defaultProps = {
        actions,
        match: {
            params: {
                category: 'myCategory'
            }
        }
    }
    const props = { ...defaultProps, ...args };
    return shallow(<ProductsContainer {...props} />);
}

describe('ProductsContainer Component', () => {

    it('should call action categpryIsSelected ', () => {
        jest.spyOn(actions, 'categoryIsSelected');
        renderComponent().instance();
        expect(actions.categoryIsSelected).toHaveBeenCalled();
    });

})
