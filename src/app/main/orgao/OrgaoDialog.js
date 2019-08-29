import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar } from '@material-ui/core';
import If from '../utils/If';

function OrgaoDialog(props) {

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState(null);
    const {abrir, openDialog, rows, isEdicao} = props;

    console.log(rows);

    const handleClose = () => {
        setOpen(false);
        openDialog(false);
    };

    useEffect(() => {
        if(abrir){
            setOpen(true);
        }
    }, [props]);

    if(isEdicao){
        const data = {
            "nome": rows.original.nome,
            "descricao": rows.original.descricao
        }

        setForm(data);
    }

    return (
        <Dialog
            classes={{
                paper: "m-24"
            }}
            open={open}
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
                            value = {rows.original.nome}
                            id="company"
                            name="company"
                            variant="outlined"
                            fullWidth
                        />
                    </div>

                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">note</Icon>
                        </div>
                        <TextField
                            className="mb-24"
                            label="Descrição"
                            id="notes"
                            name="notes"
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