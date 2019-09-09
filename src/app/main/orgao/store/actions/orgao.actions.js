import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const GET_ORGAO = 'GET_ORGAO';
export const GET_ORGAOS = 'GET ORGAOS';
export const TOGGLE_IN_SELECTED_ORGAOS = 'TOGGLE IN SELECTED ORGAOS';
export const OPEN_NEW_ORGAO_DIALOG = 'OPEN NEW ORGAO DIALOG';
export const CLOSE_NEW_ORGAO_DIALOG = 'CLOSE NEW ORGAO DIALOG';
export const OPEN_EDIT_ORGAO_DIALOG = 'OPEN EDIT ORGAO DIALOG';
export const CLOSE_EDIT_ORGAO_DIALOG = 'CLOSE EDIT ORGAO DIALOG';
export const ADD_ORGAO = 'ADD ORGAO';
export const UPDATE_ORGAO = 'UPDATE ORGAO';
export const REMOVE_ORGAO = 'REMOVE ORGAO';
export const REMOVE_ORGAOS = 'REMOVE ORGAOS';
export const TOGGLE_STARRED_ORGAO = 'TOGGLE STARRED ORGAO';
export const TOGGLE_STARRED_ORGAOS = 'TOGGLE STARRED ORGAOS';
export const SET_ORGAOS_STARRED = 'SET ORGAOS STARRED ';

export function getOrgaos()
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


    // const request = axios.get('/api/contacts-app/contacts', {
    //     params: routeParams
    // });

    // return (dispatch) =>
    //     request.then((response) =>
    //         dispatch({
    //             type   : GET_CONTACTS,
    //             payload: response.data,
    //             routeParams
    //         })
    //     );


}

export function toggleInSelectedOrgaos(contactId)
{
    return {
        type: TOGGLE_IN_SELECTED_ORGAOS,
        contactId
    }
}

export function openNewOrgaoDialog()
{
    return {
        type: OPEN_NEW_ORGAO_DIALOG
    }
}

export function closeNewOrgaoDialog()
{
    return {
        type: CLOSE_NEW_ORGAO_DIALOG
    }
}

export function openEditOrgaoDialog(data)
{
    return {
        type: OPEN_EDIT_ORGAO_DIALOG,
        data
    }
}

export function closeEditOrgaoDialog()
{
    return {
        type: CLOSE_EDIT_ORGAO_DIALOG
    }
}

export function addOrgao(newOrgao)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/add-contact', {
            newOrgao
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_ORGAO
                })
            ]).then(() => dispatch(getOrgaos(routeParams)))
        );
    };
}

export function updateOrgao(contact)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/update-contact', {
            contact
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: UPDATE_ORGAO
                })
            ]).then(() => dispatch(getOrgaos(routeParams)))
        );
    };
}

export function removeOrgao(contactId)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/remove-contact', {
            contactId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_ORGAO
                })
            ]).then(() => dispatch(getOrgaos(routeParams)))
        );
    };
}


export function removeOrgaos(contactIds)
{
    return (dispatch, getState) => {

        const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/contacts-app/remove-contacts', {
            contactIds
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_ORGAOS
                })
            ]).then(() => dispatch(getOrgaos(routeParams)))
        );
    };
}
















