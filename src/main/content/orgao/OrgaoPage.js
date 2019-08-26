import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageSimple, DemoContent } from '@fuse';

import { OrgaoList } from './OrgaoList';
import API from '../../API/API';

import OrgaoButton from './OrgaoButton';
import FuseAnimate from "../../../@fuse/components/FuseAnimate/FuseAnimate";
import {toastr} from 'react-redux-toastr'
import {Provider}  from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import {createStore, combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
const reducers = {
  // ... other reducers ...
  toastr: toastrReducer // <- Mounted at toastr.
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)


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

    toastrs = (texto, sucesso) => {

        if(sucesso)
        {
            toastr.success("Sucesso!", texto);
        }else{
            toastr.error("Erro!", texto );
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                 <Provider store={store}>
                        <div>
                            <ReduxToastr
                            timeOut={6000}
                            newestOnTop={true}
                            preventDuplicates
                            position="bottom-right"
                            transitionIn="bounceInDown"
                            transitionOut="bounceOutUp"
                            progressBar
                            closeOnToastrClick/>
                        </div>
                </Provider>
               
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
                                            onToastrs={this.toastrs}
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
                                    data={this.state.dataForm}
                                    onToastrs={this.toastrs} />
                        }
                    />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(OrgaoPage);