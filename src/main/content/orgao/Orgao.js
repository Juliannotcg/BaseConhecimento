import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';
import { OrgaoList } from './OrgaoList';
import Icon from "@material-ui/core/es/Icon/Icon";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import OrgaoForm from './OrgaoForm';

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

class Orgao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.openDialog = this.openDialog.bind(this);
    }

    openDialog = (value) => {
        this.setState({ open: value })
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
                                <Button
                                    variant="fab"
                                    color="primary"
                                    aria-label="add"
                                    className={classes.addButton}
                                    onClick={() => this.openDialog(true)}
                                >
                                    <Icon>note_add</Icon>
                                </Button>
                            </div>
                        </div>
                    }
                    content={
                            <OrgaoList />
                    }
                />
                <Dialog
                    open={this.state.open}
                    onExited={() => this.openDialog(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle
                        id="alert-dialog-title">{"Novo orgão"}
                    </DialogTitle>
                    <DialogContent>
                        <OrgaoForm />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={() => this.openDialog(false)}>Cancelar</Button>
                        <Button color="primary">Salvar</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Orgao);