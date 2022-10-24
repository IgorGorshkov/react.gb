import {configureStore} from '@reduxjs/toolkit';
import {createStore,} from "redux";
import {toggleReducer} from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(toggleReducer, composeEnhancers);