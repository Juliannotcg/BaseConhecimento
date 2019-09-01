import React, { useState, useEffect } from 'react';
import { useForm } from '@fuse/hooks';
import { TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar } from '@material-ui/core';
import If from '../utils/If';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 340,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const defaultFormState = {
    id: '',
    nome: '',
    descricao: ''
};



function OrgaoDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { form, handleChange, setForm } = useForm(defaultFormState);

    const { abrir, openDialog, rows, isEdicao } = props;

    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    function handleChangeSelect(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }


    const handleClose = () => {
        setOpen(false);
        openDialog(false);
    };

    useEffect(() => {

        setLabelWidth("Teste");

        if (abrir) {
            setOpen(true);
        }

        if (isEdicao) {
            setForm(rows);
        } else {
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
            maxWidth="xs">

            <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {
                            isEdicao === true ? 'Editar Técnico' : 'Novo Técnico'
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
            <form noValidate className="flex flex-col overflow-hidden">
                <DialogContent classes={{ root: "p-24" }}>
                    <div className="flex">
                        <div className="min-w-48 pt-20">
                            <Icon color="action">group</Icon>
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
                            <Icon color="action">location_city</Icon>
                        </div>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-simple">
                                Orgão
                        </InputLabel>
                            <Select
                                value={values.age}
                                onChange={handleChangeSelect}
                                input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                            >
                                <MenuItem value="">
                                    <em>Vazio</em>
                                </MenuItem>
                                <MenuItem value={10}>TCU</MenuItem>
                                <MenuItem value={20}>TST</MenuItem>
                                <MenuItem value={30}>TJE</MenuItem>
                                <MenuItem value={40}>Caixa Econômica</MenuItem>
                            </Select>
                        </FormControl>
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