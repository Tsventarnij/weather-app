import {combineReducers} from 'redux'

/*reducers*/

import todayReducer from './todayReducer'
import tommorowReducer from './tommorowReducer'
import weekReducer from './weekReducer'
import menuReducer from './menuReducer'
import cityReducer from './cityReducer'
import yesterdayReducer from './yesterdayReducer'

export default function createReducer() {
    return combineReducers({
        yesterday: yesterdayReducer,
        cities: cityReducer,
        today: todayReducer,
        tommorow: tommorowReducer,
        week: weekReducer,
        menu: menuReducer,
    });
}
