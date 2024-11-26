import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../ActionTypes/dashboardActionType';
import { Actions } from '../Actions/dashboardAction';
import { userService } from '../../../Api/user.services';

export const getDashboardTable = (page: any, pageSize: any) => {
    return async (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionType.GET_DASHBOARDTABLE_DATA
        });

        try {
            const { data } = await userService.getAllfilterUsers({ page: page, limit: pageSize });;
            dispatch({
                type: ActionType.GET_DASHBOARDTABLE_DATA_SUCCESS,
                payload: data.data
            });

        } catch (err: any) {
            dispatch({
                type: ActionType.GET_DASHBOARDTABLE_DATA_FAIL,
                payload: err.message
            });
        }
    }
} 