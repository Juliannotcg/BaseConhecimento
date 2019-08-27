import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const orgaosReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_ORGAOS:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_ORGAOS_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        default:
        {
            return state;
        }
    }
};

export default orgaosReducer;
