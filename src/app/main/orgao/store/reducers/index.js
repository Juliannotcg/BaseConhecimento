import {combineReducers} from 'redux';
import orgaos from '../reducers/orgaos.reducer';
import orgao from '../reducers/orgao.reducer';

const reducer = combineReducers({
    orgaos,
    orgao
});

export default reducer;
