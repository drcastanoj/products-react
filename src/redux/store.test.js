import { createStore } from 'redux';
import { rootReducer } from './reducers'
import { initialState } from './reducers/initialState';
import { loadProductsSuccess } from './actions/productsActions';
describe('store test', () => {


    it('Load products', () => {

        const store = createStore(rootReducer, initialState);
        const product = {
            name: 'myProduct'
        }

        const action = loadProductsSuccess([product]);

        store.dispatch(action);

        const productLoaded = store.getState().products[0];
        expect(productLoaded).toBe(product);
    });

});
