
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reduxContainer/Reducers/combineReducer';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));