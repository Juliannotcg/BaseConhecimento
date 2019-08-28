import React, {Component} from 'react';
import {TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, Avatar} from '@material-ui/core';


class OrgaoDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        const {open} = this.props;

        return(
            <Dialog
            classes={{
                paper: "m-24"
            }}
            onClose={open}
            fullWidth
            maxWidth="xs">
                
            </Dialog>
        );
    }
}
export default OrgaoDialog;