import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardContent,
    OutlinedInput,
    Icon,
    TextField,
    Typography,
    CardActions,
    Divider,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    LinearProgress,
    Input,
    Chip
} from '@material-ui/core';
import { FuseAnimate, FuseAnimateGroup } from '@fuse';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';



const useStyles = makeStyles(theme => ({
    header: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    headerIcon: {
        position: 'absolute',
        top: -64,
        left: 0,
        opacity: .04,
        fontSize: 412,
        width: 412,
        height: 412,
        pointerEvents: 'none'
    },
    txtSearch: {
        top: -64,
        left: 10,
        width: 200
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
        maxWidth: 300,
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'TCU',
    'TST',
    'Caixa Econômica',
    'TJE',
    'TSE',
    'STF',
    'Camâra dos deputados',
    'Senado Federeal',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function PesquisaHeader(props) {
    const [personName, setPersonName] = React.useState([]);
    const classes = useStyles(props);
    const theme = useTheme();


    function handleChange(event) {
        setPersonName(event.target.value);
    }

    return (
        <React.Fragment>
            <div className="flex flex-col flex-1 w-full">
                <div
                    className={clsx(classes.header,
                        "relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288")}>
                    <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                        <Typography color="inherit" className="text-20 sm:text-30 font-light">
                            PESQUISAR
                    </Typography>
                    </FuseAnimate>
                    <Icon className={classes.headerIcon}>search</Icon>

                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-with-placeholder"
                            label="Nome do erro"
                            placeholder="Erro"
                            className={classes.textField}
                            margin="normal"
                        />
                          <TextField
                            id="standard-with-placeholder"
                            label="Nome da solução"
                            placeholder="Solução"
                            className={classes.textField}
                            margin="normal"
                        />
                
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="select-multiple-chip">Orgãos</InputLabel>
                            <Select
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<Input id="select-multiple-chip" />}
                                renderValue={selected => (
                                    <div className={classes.chips}>
                                        {selected.map(value => (
                                            <Chip key={value} label={value} className={classes.chip} />
                                        ))}
                                    </div>
                                )}
                                MenuProps={MenuProps}
                            >
                                {names.map(name => (
                                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            id="standard-full-width"
                            label="Label"
                            style={{ margin: 8 }}
                            placeholder="Placeholder"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            className={classes.textField}
                            helperText="Some important text"
                            margin="normal"
                        />
                        <TextField
                            id="standard-with-placeholder"
                            label="With placeholder"
                            placeholder="Placeholder"
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            id="standard-textarea"
                            label="With placeholder multiline"
                            placeholder="Placeholder"
                            multiline
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            id="standard-search"
                            label="Search field"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                        />

                    </form>
                </div>
            </div>
        </React.Fragment >
    );
}

export default PesquisaHeader;
