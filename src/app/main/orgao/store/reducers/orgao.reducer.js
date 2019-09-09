import * as Actions from '../actions/orgao.actions';

const initialState = {
    data: null,
    openModal: false,
    rowEdit: null
};

const orgaoReducer = function (state = initialState, action) {
    
    switch ( action.type )
    {
        case 'GET_ORGAO':
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case 'OPEN_MODAL':
        {
            return {
                ...state,
                openModal: action.payload
            };
        }   
        case 'OPEN_MODAL_EDIT':
        {
            return {
                ...state,
                rowEdit: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default orgaoReducer;
