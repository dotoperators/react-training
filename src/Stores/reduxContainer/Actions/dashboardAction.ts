import { IUser } from '../../../interfaces/IUser';
import { ActionType } from '../ActionTypes/dashboardActionType'

interface actionPending {
    type: ActionType.GET_DASHBOARDTABLE_DATA;
}

interface actionSuccess {
    type: ActionType.GET_DASHBOARDTABLE_DATA_SUCCESS;
    payload: IUser[];
}

interface actionFail {
    type: ActionType.GET_DASHBOARDTABLE_DATA_FAIL;
    payload: string;
}

export type Actions = actionPending | actionSuccess | actionFail;