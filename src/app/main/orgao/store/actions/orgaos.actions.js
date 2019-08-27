import axios from 'axios';

export const GET_ORGAOS = '[ORGAO APP] GET ORGAOS';
export const SET_ORGAOS_SEARCH_TEXT = '[ORGAO APP] SET ORGAOS SEARCH TEXT';

export function getOrgaos()
{
    const request = axios.get('https://localhost:44342/api/Orgao');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_ORGAOS,
                payload: response.data
            })
        );
}

export function setOrgaosSearchText(event)
{
    return {
        type      : SET_ORGAOS_SEARCH_TEXT,
        searchText: event.target.value
    }
}

