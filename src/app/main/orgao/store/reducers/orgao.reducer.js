import * as Actions from '../actions/orgao.actions';

const initialState = {
    selectedOrgaoIds: [],
    orgaoDialog     : {
        type : 'new',
        props: {
            open: false
        },
        data : null
    }
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
        case Actions.TOGGLE_IN_SELECTED_ORGAOS:
            {
    
                const orgaoId = action.orgaoId;
    
                let selectedOrgaoIds = [...state.selectedOrgaoIds];
    
                if ( selectedOrgaoIds.find(id => id === orgaoId) !== undefined )
                {
                    selectedOrgaoIds = selectedOrgaoIds.filter(id => id !== orgaoId);
                }
                else
                {
                    selectedOrgaoIds = [...selectedOrgaoIds, orgaoId];
                }
    
                return {
                    ...state,
                    selectedOrgaoIds: selectedOrgaoIds
                };
            }
            case Actions.OPEN_NEW_ORGAO_DIALOG:
            {
                return {
                    ...state,
                    orgaoDialog: {
                        type : 'new',
                        props: {
                            open: true
                        },
                        data : null
                    }
                };
            }
            case Actions.CLOSE_NEW_ORGAO_DIALOG:
            {
                return {
                    ...state,
                    orgaoDialog: {
                        type : 'new',
                        props: {
                            open: false
                        },
                        data : null
                    }
                };
            }
            case Actions.OPEN_EDIT_ORGAO_DIALOG:
            {
                return {
                    ...state,
                    orgaoDialog: {
                        type : 'edit',
                        props: {
                            open: true
                        },
                        data : action.data
                    }
                };
            }
            case Actions.CLOSE_EDIT_ORGAO_DIALOG:
            {
                return {
                    ...state,
                    contactDialog: {
                        type : 'edit',
                        props: {
                            open: false
                        },
                        data : null
                    }
                };
            }
        default:
        {
            return state;
        }
    }
};

export default orgaoReducer;
