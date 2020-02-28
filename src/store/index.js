import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import validationMiddleware from './middlewares';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(validationMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
