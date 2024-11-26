import { ActionType } from '../ActionTypes/dashboardActionType';
import { Actions } from '../Actions/dashboardAction';
import { state } from '../state';
const initialState: state = {
    users: [{

    }]
}

const dashboardReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionType.GET_DASHBOARDTABLE_DATA:
            return {
                ...state
            }
        case ActionType.GET_DASHBOARDTABLE_DATA_SUCCESS:
            return {
                ...state,
                users: action?.payload
            }
        default:
            return state;
    }
}


export default dashboardReducer;