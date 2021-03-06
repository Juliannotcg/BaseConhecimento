import React, { useState } from 'react';
import { Paper, Button, Input, Icon, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function IncidenteHeader(props) {
    const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);

    const [abrir, setAbrir] = useState(false);
    const [isEdicao, setIsEdicao] = useState(false);

    const { handlerEdicao, openDialog} = props;
 

    return (
        <React.Fragment>
            <div className="flex flex-1 w-full items-center justify-between">

                <div className="flex items-center">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-32 mr-0 sm:mr-12">bug_report</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography className="hidden sm:flex" variant="h6">Incidentes</Typography>
                    </FuseAnimate>
                </div>

                <div className="flex flex-1 items-center justify-center px-12">
                    <ThemeProvider theme={mainTheme}>
                        <FuseAnimate animation="transition.slideDownIn" delay={300}>
                            <Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>
                                <Icon className="mr-8" color="action">search</Icon>
                                <Input
                                    placeholder="Pesquisar"
                                    className="flex flex-1"
                                    disableUnderline
                                    fullWidth
                                    inputProps={{ 'aria-label': 'Search' }}
                                />
                            </Paper>
                        </FuseAnimate>
                    </ThemeProvider>
                </div>
                <FuseAnimate animation="transition.slideRightIn" delay={300}>
                    <Button
                        onClick={(ev) => {
                            ev.stopPropagation();
                            openDialog(true);
                            handlerEdicao(false);
                        }}
                        component={Link}
                        className="whitespace-no-wrap"
                        variant="contained">
                        <span className="hidden sm:flex">Adicionar</span>
                        <span className="flex sm:hidden">New</span>
                    </Button>
                </FuseAnimate>
            </div>
        </React.Fragment>
    );
}

export default IncidenteHeader;
