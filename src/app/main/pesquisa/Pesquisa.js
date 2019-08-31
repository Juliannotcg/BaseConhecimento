import React, {Component} from 'react';
import {withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import {FusePageSimple} from '@fuse';
import PesquisaHeader from './PesquisaHeader';
import PesquisaList from './PesquisaList';

const styles = theme => ({
    layoutRoot: {},
});


class Pesquisa extends Component {
   
    render()
    {
        const {classes } = this.props;

        return (
            <FusePageSimple
                classes={{
                    root          : classes.layoutRoot,
                    content       : "flex flex-col h-full",
                    header        : "min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                   <PesquisaHeader />
                } 
                content={
                    <PesquisaList />
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Pesquisa);