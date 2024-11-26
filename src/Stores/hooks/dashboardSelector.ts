// We need this to use useSelector  (You can Export this as a react-hook to use separately)
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../reduxContainer/Reducers/combineReducer';
export const dashboardSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useProduct: TypedUseSelectorHook<RootState> = useTypedSelector;