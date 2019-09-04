import React, { useEffect, useState } from 'react';
import { Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FuseAnimate, FusePageCarded, FuseChipSelect, FuseUtils } from '@fuse';
import MenuItem from '@material-ui/core/MenuItem';
import { useForm } from '@fuse/hooks';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import _ from '@lodash';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    productImageFeaturedStar: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: orange[400],
        opacity: 0
    },
    productImageUpload: {
        transitionProperty: 'box-shadow',
        transitionDuration: theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
    },
    productImageItem: {
        transitionProperty: 'box-shadow',
        transitionDuration: theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        '&:hover': {
            '& $productImageFeaturedStar': {
                opacity: .8
            }
        },
        '&.featured': {
            pointerEvents: 'none',
            boxShadow: theme.shadows[3],
            '& $productImageFeaturedStar': {
                opacity: 1
            },
            '&:hover $productImageFeaturedStar': {
                opacity: 1
            }
        }
    }
}));

function IncidenteForm(props) {


    const classes = useStyles(props);

    const [tabValue, setTabValue] = useState(0);
    const { form, handleChange, setForm } = useForm(null);

    const [values, setValues] = useState({
        age: '',
        name: 'hai',
    });

    function handleChangeTab(event, tabValue) {
        setTabValue(tabValue);
    }

    function handleChangeSelect(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }


    return (
        <React.Fragment>
            <Tabs
                value={tabValue}
                onChange={handleChangeTab}
                indicatorColor="secondary"
                textColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                classes={{ root: "w-full h-64" }}
            >
                <Tab className="h-64 normal-case" label="Informações Básicas" />
                <Tab className="h-64 normal-case" label="Anexos" />
                <Tab className="h-64 normal-case" label="Dados Técnicos" />
                <Tab className="h-64 normal-case" label="Usuário" />

            </Tabs>
            <div className="p-16 sm:p-24 max-w-2xl">
                {tabValue === 0 &&
                    (
                        <div>

                            <TextField
                                className="mt-8 mb-16"
                                required
                                label="Nome do incidente"
                                autoFocus
                                id="name"
                                name="name"
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                className="mt-8 mb-16"
                                id="description"
                                name="description"
                                label="Descrição curta"
                                type="text"
                                multiline
                                rows={3}
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                className="mt-8 mb-16"
                                id="description"
                                name="description"
                                label="Descrição Longa"
                                type="text"
                                multiline
                                rows={5}
                                variant="outlined"
                                fullWidth
                            />

                        </div>
                    )}
                {tabValue === 1 && ( //UPLOAD
                    <div>
                        <input
                            accept="image/*"
                            className="hidden"
                            id="button-file"
                            type="file"
                        />
                        <div className="flex justify-center sm:justify-start flex-wrap">
                            <label
                                htmlFor="button-file"
                                className={
                                    clsx(
                                        classes.productImageUpload,
                                        "flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                                    )}
                            >
                                <Icon fontSize="large" color="action">cloud_upload</Icon>
                            </label>
                        </div>
                    </div>
                )}
                {tabValue === 2 && ( //DADOS TÉCNICOS
                    <div>
                        <div className="flex">
                            <TextField
                                className="mt-8 mb-16 mr-8"
                                label="Nome Equipamento/Software"
                                autoFocus
                                id="width"
                                name="width"
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                className="mt-8 mb-16 mr-8"
                                label="Marca"
                                id="height"
                                name="height"
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                className="mt-8 mb-16 mr-8"
                                label="Patrimônio"
                                id="depth"
                                name="depth"
                                variant="outlined"
                                fullWidth
                            />

                        </div>
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth>
                            <InputLabel
                                htmlFor="outlined-age-simple"
                                fullWidth>
                                Tipo Incidente
                        </InputLabel>
                            <Select
                                value={values.age}
                                onChange={handleChangeSelect}
                                input={<OutlinedInput name="age" id="outlined-age-simple" />}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value={10}>Bug</MenuItem>
                                <MenuItem value={20}>Falha</MenuItem>
                                <MenuItem value={30}>Mal Funcionamento</MenuItem>
                                <MenuItem value={40}>Conhecimento</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )}
                {tabValue === 3 && (
                    <div>
                        <div className="flex">
                            <TextField
                                className="mt-8 mb-16 mr-8"
                                label="Nome do usuário"
                                autoFocus
                                id="width"
                                name="width"
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                className="mt-8 mb-16 mr-8"
                                label="Sobre Nome"
                                id="height"
                                name="height"
                                variant="outlined"
                                fullWidth
                            />
                        </div>

                        <div className="flex">
                            <TextField
                                className="mt-8 mb-16 mr-8"
                                label="Sala"
                                autoFocus
                                id="width"
                                name="width"
                                variant="outlined"
                                fullWidth
                            />

                            <TextField
                                className="mt-8 mb-16 mr-8"
                                label="Bloco"
                                id="height"
                                name="height"
                                variant="outlined"
                                fullWidth
                            />
                        </div>

                       
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default (IncidenteForm);
