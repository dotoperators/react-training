import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';

const reducers = combineReducers({
    users: dashboardReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;