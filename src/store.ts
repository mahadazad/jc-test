import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store: any = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
