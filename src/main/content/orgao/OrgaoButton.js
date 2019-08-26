import React, { Component, Fragment } from 'react';
import Icon from "@material-ui/core/es/Icon/Icon";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/es/IconButton/IconButton";

import OrgaoModal from './OrgaoModal';
import If from '../if'

export default class OrgaoButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    openDialog = (value) => {
        this.setState({ open: value })
    }

    render() {
        const { isEdicao, classes, item, onOrgaoAdicionado, onToastrs } = this.props

        return <Fragment>
            <If test={isEdicao}>
                <IconButton 
                    onClick={() => this.openDialog(true)}>
                    <Icon>edit</Icon>
                </IconButton>
            </If>
            <If test={!isEdicao}>
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="add"
                    className={classes.addButton}
                    onClick={() => this.openDialog(true)}
                >
                    <Icon>note_add</Icon>
                </Button>
            </If>
            <OrgaoModal
                onToastrs={onToastrs}
                item={item}
                isEdicao={isEdicao}
                onClose={() => this.openDialog(false)}
                open={this.state.open}
                onOrgaoAdicionado={onOrgaoAdicionado}/>
        </Fragment>
    }
}