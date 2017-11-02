import React from 'react'
import ReactDOM from 'react-dom'

import {Router, browserHistory} from 'react-router'

import {Provider} from 'react-redux'
import configureStore from './store/default'

import AppRoutes from './AppRoutes'

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router routes={AppRoutes} history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
