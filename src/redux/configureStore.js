import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './actions';

export function configureStore(initialState) {

    const epicMiddleware = createEpicMiddleware();

    const store =  createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(epicMiddleware, reduxImmutableStateInvariant()))
    );

    epicMiddleware.run(rootEpic);
    return store;
}
