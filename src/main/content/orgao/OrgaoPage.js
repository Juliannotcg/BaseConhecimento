import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';

import { OrgaoList } from './OrgaoList';
import API from '../../API/API';

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
        this.state = {
            dataForm: []
        }
    }

    componentDidMount() {
        this.buscar();
    }

    buscar = () => {
        this.setState({ loaded: true });
       
        API.BaseConhecimento.get("/orgao")
            .then(orgaos => {
                this.setState({ dataForm: orgaos, mainLoading: false })
            }, (evt) => console.log(evt));
    };


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
                                        <OrgaoButton
                                            classes={classes}
                                            onOrgaoAdicionado={this.buscar} />
                                    </ FuseAnimate>
                                </div>
                            </div>
                        }
                        content={
                                <OrgaoList
                                    classes={classes}
                                    onOrgaoAdicionado={this.buscar}
                                    data={this.state.dataForm} />
                        }
                    />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(OrgaoPage);