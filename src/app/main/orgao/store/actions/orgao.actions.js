import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const GET_ORGAO = 'GET_ORGAO';

export function getOrgao()
{
    const data = [{
        "id": "01",
        "nome": "Julianno",
        "descricao": "Teste"
    },
    {
        "id": "02",
        "nome": "Neto",
        "descricao": "Teste"
    },
    {
        "id": "03",
        "nome": "Marcondes",
        "descricao": "Teste"
    },
    {
        "id": "04",
        "nome": "Anderson",
        "descricao": "Teste"
    }]

    return (dispatch) =>
    dispatch({
        type   : 'GET_ORGAO',
        payload: data
    });
}

export function openModal(value)
{
    return (dispatch) =>
        dispatch({
            type   : 'OPEN_MODAL',
            payload: value
        });
}





