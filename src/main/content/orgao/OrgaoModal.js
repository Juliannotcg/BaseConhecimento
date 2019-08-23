import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';
import { OrgaoList } from './OrgaoList';
import Icon from "@material-ui/core/es/Icon/Icon";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import OrgaoForm from './OrgaoForm';


export default class OrgaoModal extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        const { open, onClose, item, isEdicao, onOrgaoAdicionado, onToastrs } = this.props;

        return (
            <div>
                <Dialog
                    open={open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                    maxWidth = 'sm'>
                    <Fragment>
                        <DialogTitle
                            id="alert-dialog-title">{"Novo orgão"}
                        </DialogTitle>
                        <DialogContent>
                            <OrgaoForm 
                                onToastrs={onToastrs}
                                onClose={onClose}
                                isEdicao={isEdicao}
                                item={item}
                                onOrgaoAdicionado={onOrgaoAdicionado}/>
                        </DialogContent>
                    </Fragment>
                </Dialog>
            </div>
        )
    }
}
