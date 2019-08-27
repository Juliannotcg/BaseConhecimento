import * as Actions from '../actions';

const initialState = {
    data: null
};

const orgaoReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_ORGAO:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SAVE_ORGAO:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default orgaoReducer;
