import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './actions';

export function configureStore(initialState) {

    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);
    return store;
}
