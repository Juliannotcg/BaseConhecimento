import React, { Component } from 'react';
import ReactTable from "react-table";
import { withStyles } from '@material-ui/core/styles';
import Icon from "@material-ui/core/es/Icon/Icon";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import FuseAnimate from "../../../@fuse/components/FuseAnimate/FuseAnimate";
import Paper from "@material-ui/core/es/Paper/Paper";
import axios from "axios";
import OrgaoButton from './OrgaoButton';
import API from '../../API/API';

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
        axios.delete("https://localhost:44342/api/orgao?id=" + id)
            .then((res) => {
                this.setState({ loaded: false });
                this.getDate();
            })
            .catch((error) => {
                this.setState({ loaded: false });
                console.log(error)
            })
    };

    componentDidMount(){
        this.props.onOrgaoAdicionado();
    }


    render() {
        const { classes, onOrgaoAdicionado, dataForm } = this.props;
        onOrgaoAdicionado();

        let data = [];
        let id = [];

        data = Object.keys(dataForm).map((key) => {
            id.push(key);
            return dataForm[key]
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
                                            this.removeForm(row.original.id);
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

