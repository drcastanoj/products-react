import { categorySelectedReducer } from "./categorySelectedReducer";
import { categoryIsSelected } from "../actions/categorySelectedActions";


describe('CategorySelected Reducer', () => {

    it('return null if category is undefined', () => {
        const state = categorySelectedReducer(
            'Tech',
            categoryIsSelected(undefined)
        );
        expect(state).toBe(null);
    })

    it('return new category', () => {
        const state = categorySelectedReducer(
            null,
            categoryIsSelected('Tech')
        );
        expect(state).toBe('Tech');
    })
})
