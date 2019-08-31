import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple} from '@fuse';
import PesquisaHeader from './PesquisaHeader';

const styles = theme => ({
    layoutRoot: {}
});

class Pesquisa extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                   <PesquisaHeader />
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Pesquisa);