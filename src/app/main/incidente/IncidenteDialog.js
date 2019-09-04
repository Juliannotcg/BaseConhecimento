import React, { useState, useEffect } from 'react';
import {useForm} from '@fuse/hooks';
import { TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar } from '@material-ui/core';
import If from '../utils/If';
import IncidenteForm from './IncidenteForm';


const defaultFormState = {
    id      : '',
    nome    : '',
    descricaoCurta: '',
    descricaoLonga: '',
    equipamentoSoftware: '',
    orgao: '',
    localIncidente: '',
    reponsavelSetor: '',
    tecnicoResponsavel: ''

};

function IncidenteDialog(props) {

    const [open, setOpen] = useState(false);
    const {form, handleChange, setForm} = useForm(defaultFormState);
    const {abrir, openDialog, rows, isEdicao} = props;


    const handleClose = () => {
        setOpen(false);
        openDialog(false);
    };

    useEffect(() => {
        if(abrir){
            setOpen(true);
        }

        if(isEdicao){
            setForm(rows);
        }else{
            setForm(defaultFormState);
        }
    }, [props]);

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md">

            <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {
                            isEdicao === true ? 'Editar Incidente' : 'Novo incidente'
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
            <form noValidate className="flex flex-col overflow-hidden">
                <DialogContent classes={{ root: "p-24" }}>
                    
                        <IncidenteForm />
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
export default IncidenteDialog;