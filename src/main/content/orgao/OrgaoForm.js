import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


export default class OrgaoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }

        this.openDialog = this.openDialog.bind(this);
    }

    openDialog = (value) => {
        this.setState({open: value})
    }

    render() {
        const { abrir } = this.props;

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={() => this.openDialog(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle 
                    id="alert-dialog-title">{"Cadastro"}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nome"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Descrição"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={() => this.openDialog(false)}>Cancelar</Button>
                        <Button color="primary">Salvar</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}