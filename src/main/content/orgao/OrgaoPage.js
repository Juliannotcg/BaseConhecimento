import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';
import { OrgaoList } from './OrgaoList';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import OrgaoButton from './OrgaoButton';
import FuseAnimate from "../../../@fuse/components/FuseAnimate/FuseAnimate";


const styles = theme => ({
    layoutRoot: {},
    addButton: {
        position: 'absolute',
        right: 100,
        top: 125,
        bottom: 200,
        zIndex: 99
    }
});

class OrgaoPage extends Component {
    constructor(props) {
        super(props);
    }    

    render() {
        const { classes } = this.props;

        return (
            <div>
                <FusePageSimple
                    classes={{
                        root: classes.layoutRoot
                    }}
                    header={
                        <div className="p-24"><h4>Orgão</h4></div>
                    }
                    contentToolbar={
                        <div>
                            <h4>Orgãos</h4>
                            <div >
                                <FuseAnimate animation="transition.slideLeftIn" delay={600}>
                                    <OrgaoButton classes={classes} />
                                </ FuseAnimate>
                            </div>
                        </div>
                    }
                    content={
                        <OrgaoList classes={classes} />
                    }
                />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(OrgaoPage);