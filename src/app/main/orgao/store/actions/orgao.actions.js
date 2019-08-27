import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const GET_ORGAO = '[ORGAO APP] GET ORGAO';
export const SAVE_ORGAO = '[ORGAO APP] SAVE ORGAO';

export function getOrgao(params)
{
    const request = axios.get('https://localhost:44342/api/orgao', {params});

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_ORGAO,
                payload: response.data
            })
        );
}

export function saveOrgao(data)
{
    const request = axios.post('https://localhost:44342/api/Orgao', data);

    return (dispatch) =>
        request.then((response) => {

                dispatch(showMessage({message: 'Product Saved'}));

                return dispatch({
                    type   : SAVE_ORGAO,
                    payload: response.data
                })
            }
        );
}

export function newOrgao()
{
    const data = {
        nome            : '',
        descricao       : '',
       
    };

    return {
        type   : GET_ORGAO,
        payload: data
    }
}
