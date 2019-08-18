import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import { BaseConhecimentoList } from './BaseConhecimentoList';

const styles = theme => ({
    layoutRoot: {}
});

class BaseConhecimento extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24"><h4>Base de conhecimento</h4></div>
                }
                contentToolbar={
                    <div className="px-24"><h4>Lista de soluções</h4></div>
                }
                content={
                    <div >
                       <BaseConhecimentoList />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(BaseConhecimento);