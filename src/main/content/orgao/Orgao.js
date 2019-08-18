import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';
import { OrgaoList } from './OrgaoList';
import Icon from "@material-ui/core/es/Icon/Icon";
import OrgaoForm from './OrgaoForm';
import Button from '@material-ui/core/Button';

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

        this.addForm = this.addForm.bind(this);
    }

    addForm = (valor) => {
       this.setState({open: valor})
    };
  
    render() {
        const { classes } = this.props;

        return (
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
                                onClick={() => this.addForm(true)}
                            >
                            <Icon>note_add</Icon>
                            </Button>

                            <OrgaoForm abrir = {this.state.open}/>
                        </div>
                    </div>
                }
                content={
                    <div >
                        <OrgaoList />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(Orgao);