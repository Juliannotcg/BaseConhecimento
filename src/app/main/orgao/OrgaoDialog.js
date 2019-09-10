import React, {useEffect, useCallback} from 'react';
import {TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import FuseUtils from '@fuse/FuseUtils';
import * as Actions from './store/actions/orgao.actions';
import {useDispatch, useSelector} from 'react-redux';

const defaultFormState = {
    id       : '',
    nome     : '',
    descricao: ''
};

function OrgaoDialog(props)
{
    const dispatch = useDispatch();
    const orgaoDialog = useSelector(({orgaoApp}) => orgaoApp.orgao.orgaoDialog);

    const {form, handleChange, setForm} = useForm(defaultFormState);

    const initDialog = useCallback(
        () => {
            
            if ( orgaoDialog.type === 'edit' && orgaoDialog.data )
            {
                setForm({...orgaoDialog.data});
            }

            if ( orgaoDialog.type === 'new' )
            {
                setForm({
                    ...defaultFormState,
                    ...orgaoDialog.data,
                    id: FuseUtils.generateGUID()
                });
            }
        },
        [orgaoDialog.data, orgaoDialog.type, setForm],
    );

    useEffect(() => {
        if ( orgaoDialog.props.open )
        {
            initDialog();
        }

    }, [orgaoDialog.props.open, initDialog]);

    function closeComposeDialog()
    {
        orgaoDialog.type === 'edit' ? dispatch(Actions.closeEditOrgaoDialog()) : dispatch(Actions.closeNewOrgaoDialog());
    }

    function canBeSubmitted()
    {
        return (
            form.nome.length > 0
        );
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        dispatch(Actions.updateOrgao(form));
        closeComposeDialog();
    }

    function handleRemove()
    {
       // dispatch(Actions.removeOrgao(form.id));
        closeComposeDialog();
    }

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            {...orgaoDialog.props}
            onClose={closeComposeDialog}
            fullWidth
            maxWidth="xs"
        >

            <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {orgaoDialog.type === 'new' ? 'Novo Orgão' : `Editar Orgão: ${form.nome}`}
                    </Typography>
                </Toolbar>
      
            </AppBar>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                <DialogContent classes={{root: "p-24"}}>
                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">account_circle</Icon>
                        </div>

                        <TextField
                            className="mb-24"
                            label="Nome"
                            autoFocus
                            id="nome"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            variant="outlined"
                            required
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">account_circle</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Descricao"
                            id="descricao"
                            name="descricao"
                            value={form.descricao}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                </DialogContent>

                {orgaoDialog.type === 'new' ? (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            type="submit"
                            disabled={!canBeSubmitted()}
                        >
                            Add
                        </Button>
                    </DialogActions>
                ) : (
                    <DialogActions className="justify-between pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={handleSubmit}
                            disabled={!canBeSubmitted()}
                        >
                            Save
                        </Button>
                        <IconButton
                            onClick={handleRemove}
                        >
                            <Icon>delete</Icon>
                        </IconButton>
                    </DialogActions>
                )}
            </form>
        </Dialog>
    );
}

export default OrgaoDialog;
