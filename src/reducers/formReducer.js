import { types } from '../types/types';


const initialState = {
    
};

export const formReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case types.formSetValues:
            return {
                ...state,
                initEvent: action.payload
            }
    
        case types.formClearValues:
            return {
                ...state,
                initEvent: initialState.initEvent
            }
    
        default:
            return state;
    }
}