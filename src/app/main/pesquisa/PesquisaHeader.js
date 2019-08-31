import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
    Input
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
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
    txtSearch:{
        top: -64,
        left: 10,
        width: 200
    }
}));


function PesquisaHeader(props) {

    const classes = useStyles(props);

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
                </div>

                <TextField
                            className={classes.txtSearch}
                            label="Nome"
                            id="nome"
                            name="nome"
                            variant="outlined"
                            fullWidth
                            required
                        />
            </div>
        </React.Fragment >
    );
}

export default PesquisaHeader;
