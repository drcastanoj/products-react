import { Categories } from "./categories";
import React from 'react';
import { shallow } from 'enzyme';

const actions = {
    categoryIsSelected: () => { }
};
function renderComponent(args) {
    const defaultProps = {
        actions,
        categories: [
            { category: 'All', icon: 'list' },
            { category: 'Tech', icon: 'laptop' },
            { category: 'Services', icon: 'build' },
            { category: 'Office', icon: 'folder' }
        ],
        categorySelected: undefined,
    }
    const props = { ...defaultProps, ...args };
    return shallow(<Categories {...props} />);
}

describe('Categories Component', () => {


    describe('Method: categoryIsSelected', () => {

        it('should call action categpryIsSelected ', () => {
            jest.spyOn(actions, 'categoryIsSelected');
            const instace = renderComponent().instance();
            instace.categoryIsSelected('Tech');
            expect(actions.categoryIsSelected).toHaveBeenCalled();
        });

        it('should set  categorySelected ', () => {
            const instace = renderComponent().instance();
            jest.spyOn(instace, 'setState');
            instace.categoryIsSelected('Tech');
            expect(instace.setState).toHaveBeenCalled();
            expect(instace.setState).toHaveBeenCalledWith({ categorySelected: 'Tech' })
        });

        it('should set  categorySelected ', () => {
            const instace = renderComponent().instance();
            jest.spyOn(instace, 'setState');
            instace.categoryIsSelected('All');
            expect(instace.setState).toHaveBeenCalled();
            expect(instace.setState).toHaveBeenCalledWith({ categorySelected: '' })
        });
    });

    describe('Method: isCategorySelected', () => {

        it('should return true same category selected  ', () => {
            jest.spyOn(actions, 'categoryIsSelected');
            const instace = renderComponent({categorySelected: 'Tech'}).instance();
            expect(instace.isCategorySelected('Tech')).toBe(true);
        });

        it('should return true if categorySected is null and selected  All', () => {
            jest.spyOn(actions, 'categoryIsSelected');
            const instace = renderComponent({categorySelected: null}).instance();
            expect(instace.isCategorySelected('All')).toBe(true);
        });

        it('should return false si categorySelected is null and selected  another category', () => {
            jest.spyOn(actions, 'categoryIsSelected');
            const instace = renderComponent({categorySelected: null}).instance();
            expect(instace.isCategorySelected('Tech')).toBe(false);
        });

    });

    describe('Method: render', () => {

        it('should have ItemCategory ', () => {
            const component = renderComponent();
            expect(component.find('ItemCategory').length).toBe(4);
        });

        it('should have List ', () => {
            const component = renderComponent();
            expect(component.find('List').length).toBe(1);
        });


    });
})
