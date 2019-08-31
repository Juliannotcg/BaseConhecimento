import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import {  FuseAnimate } from '@fuse';
import ReactTable from "react-table";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    tabelaList: {
        top: 150,
        height: 450
    },
    }))

function PesquisaList(props) {

    const [filteredData, setFilteredData] = useState(null);
    const classes = useStyles(props);

    useEffect(() => {
        const data = [{
            "id": "01",
            "erro": "Erro ao abrir copperning",
            "solucao": "Reinstalar",
            "descricao": "Ao tentar abrir o sistema apresenta erro",
            "orgaos": "TJE, TCU",
            "equipamento": "Cooperning",
            "tecnico": "Neto",
            "datacriacao": "20/02/2019"
        }]

        setFilteredData(data);
    }, []);


    if (!filteredData) {
        return null;
    }

    if (filteredData.length === 0) {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    A lista está vazia!
                </Typography>
            </div>
        );
    }

    return (
        <React.Fragment>
            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                <ReactTable
                    className={classes.tabelaList}
                    getTrProps={(state, rowInfo, column) => {
                        return {
                            className: "cursor-pointer",
                        }
                    }}
                    data={filteredData}
                    columns={[
                        {
                            Header: "Erro",
                            accessor: "erro",
                            className: "font-bold"
                        },
                        {
                            Header: "Solução",
                            accessor: "solucao",
                            className: "font-bold"
                        },
                        {
                            Header: "Descrição",
                            accessor: "descricao",
                            className: "font-bold"
                        },
                        {
                            Header: "Orgãos",
                            accessor: "orgaos",
                            className: "font-bold"
                        },
                        {
                            Header: "Equipamento/Software",
                            accessor: "equipamento",
                            className: "font-bold"
                        },                        
                        {
                            Header: "Técnico",
                            accessor: "tecnico",
                            className: "font-bold"
                        },                        
                        {
                            Header: "Data Criação",
                            accessor: "datacriacao",
                            className: "font-bold"
                        }
                    ]}
                    defaultPageSize={10}
                    noDataText="No contacts found"
                />
            </FuseAnimate>
    
        </React.Fragment>
    );
}

export default PesquisaList;
