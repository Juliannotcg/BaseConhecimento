import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, Icon, IconButton, Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import ReactTable from "react-table";
import * as Actions from './store/actions/orgao.actions'
import { useDispatch } from 'react-redux';


function OrgaosList(props) {
    
    const { handlerEdicao, openDialog, valorRows, dados} = props;
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                <ReactTable
                    className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
                    getTrProps={(state, rowInfo, column) => {
                        return {
                            className: "cursor-pointer",
                        }
                    }}
                    data={dados}
                    columns={[
                        {
                            Header: "Nome",
                            accessor: "nome",
                            filterable: true,
                            className: "font-bold"
                        },
                        {
                            Header: "Descrção",
                            accessor: "descricao",
                            filterable: true,
                            className: "font-bold"
                        },
                        {
                            Header: "",
                            width: 128,
                            Cell: row => (
                                <div className="flex items-center">
                                    <IconButton
                                        onClick={(ev) => {
                                            dispatch(Actions.openEditOrgaoDialog(row.original));
                                        }}
                                    >
                                        <Icon>edit</Icon>

                                    </IconButton>
                                    <IconButton

                                    >
                                        <Icon>delete</Icon>
                                    </IconButton>
                                </div>
                            )
                        }
                    ]}
                    defaultPageSize={10}
                    noDataText="No contacts found"
                />
            </FuseAnimate>
    
        </React.Fragment>
    );
}


export default OrgaosList;
