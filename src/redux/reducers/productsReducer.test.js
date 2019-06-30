import { productsReducer } from "./productsReducer";
import { loadProductsSuccess } from "../actions/productsActions";


describe('Products Reducer', () => {

    it('return array withs objects', () => {
        const state = productsReducer(
            [],
            loadProductsSuccess([{}])
        );
        expect(state.length).toBe(1);
    });
})
