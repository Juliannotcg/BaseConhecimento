import React, { useState, useEffect } from 'react';
import {useForm} from '@fuse/hooks';
import { TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar } from '@material-ui/core';
import * as Actions from './store/actions/orgao.actions'
import { useDispatch, useSelector } from 'react-redux';


const defaultFormState = {
    id      : '',
    nome    : '',
    descricao: ''
};


function OrgaoDialog(props) {

    const {form, handleChange} = useForm(defaultFormState);
    const {isEdicao} = props;

    const dispatch = useDispatch();
    const modal = useSelector(({orgaoApp}) => orgaoApp.orgao);

    const handleClose = () => {
        dispatch(Actions.openModalEdit(null));
        dispatch(Actions.openModal(false));
    };

    useEffect(() => {

        if(modal.rowEdit.nome){
            form.nome = modal.rowEdit.nome;
        }

    }, [dispatch, modal]);
  
    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            open={modal.openModal}
            onClose={handleClose}
            fullWidth
            maxWidth="xs">

            <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {
                            isEdicao === true ? 'Editar Orgão' : 'Novo Orgão'
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
            <form noValidate className="flex flex-col overflow-hidden">
                <DialogContent classes={{ root: "p-24" }}>
                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">domain</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Nome"
                            value={form.nome}
                            onChange={handleChange}
                            id="nome"
                            name="nome"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">note</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Descrição"
                            id="descricao"
                            value={form.descricao}
                            onChange={handleChange}
                            name="descricao"
                            variant="outlined"
                            multiline
                            rows={5}
                            fullWidth
                        />
                    </div>
                </DialogContent>

                <DialogActions className="justify-between pl-16">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Salvar
                        </Button>
                    <IconButton

                    >
                        <Icon>delete</Icon>
                    </IconButton>
                </DialogActions>

            </form>

        </Dialog>
    );
}
export default OrgaoDialog;