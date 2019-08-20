import React, { Component } from 'react';
import ReactTable from "react-table";
import { withStyles } from '@material-ui/core/styles';
import Icon from "@material-ui/core/es/Icon/Icon";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import FuseAnimate from "../../../@fuse/components/FuseAnimate/FuseAnimate";
import Paper from "@material-ui/core/es/Paper/Paper";
import axios from "axios";
import OrgaoButton from './OrgaoButton';

const styles = theme => ({
    layoutRoot: {}
});

export class OrgaoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forms: {},
            loaded: false
        };
    }

    removeForm = (id) => {
        this.setState({ loaded: true });
        axios.delete("https://valued-mediator-138113.firebaseio.com/forms/" + id + ".json")
            .then((res) => {
                this.setState({ loaded: false });
                this.getDate();
            })
            .catch((error) => {
                this.setState({ loaded: false });
                console.log(error)
            })
    };



    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        this.setState({ loaded: true });

        let data = [];

        data = [{
            "id": 1,
            "nome": "Julianno",
            "descricao": "Teste"
        },
        {
            "id": 2,
            "nome": "Neto",
            "descricao": "Testes"
        }];

        this.setState({ forms: data, loaded: true });

        // axios.get('https://localhost:44342/api/orgao')
        //     .then((response)=>{
        //         this.setState({forms: response.data, loaded: true});
        //     }).catch((error)=>{
        //     this.setState({loaded:true});
        //         console.log(error);
        // });

        // API.TipoPrestador.post("/tipoprestador/busca", this.state.filtro)
        // .then(tipoPrestadores => {
        //     this.setState({ tipoPrestadores: tipoPrestadores, mainLoading: false })
        // }, (evt) => this.mostrarMensagemErro({ mainLoading: false }, evt));
    };

    render() {
        const { classes } = this.props;

        let data = [];
        let id = [];

        data = Object.keys(this.state.forms).map((key) => {
            id.push(key);
            return this.state.forms[key]
        });
        return (
            <div>
                <FuseAnimate animation="transition.slideLeftIn" delay={200}>
                    <div>
                        {this.state.loaded}
                    </div>
                </FuseAnimate>
                <ReactTable data={data}
                    autoGenerateColumns={true}
                    defaultPageSize={10}
                    columns={[

                        {
                            Header: "Nome",
                            width: 350,
                            id: "nome",
                            accessor: d => d.nome
                        },
                        {
                            Header: "Descrição",
                            id: "descricao",
                            accessor: d => d.descricao
                        },
                        {
                            Header: "",
                            width: 130,
                            Cell: (row, index) => (
                                <div className="flex items-center">
                                    <OrgaoButton 
                                        classes={classes}
                                        item={row.original}
                                        isEdicao={true} />
                                    <IconButton
                                        onClick={(ev) => {
                                            ev.stopPropagation();
                                            this.removeForm(id[row.index]);
                                        }}>
                                        <Icon>delete</Icon>
                                    </IconButton>
                                </div>
                            )
                        }

                    ]} />
            </div>
        );
    }
}

