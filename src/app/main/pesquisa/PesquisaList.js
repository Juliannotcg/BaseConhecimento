import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import {  FuseAnimate } from '@fuse';
import ReactTable from "react-table";


function PesquisaList(props) {

    const [filteredData, setFilteredData] = useState(null);

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
                    className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
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
                            filterable: true,
                            className: "font-bold"
                        },
                        {
                            Header: "Solução",
                            accessor: "solucao",
                            filterable: true,
                            className: "font-bold"
                        },
                        {
                            Header: "Descrição",
                            accessor: "descricao",
                            filterable: true,
                            className: "font-bold"
                        },
                        {
                            Header: "Orgãos",
                            accessor: "orgaos",
                            filterable: true,
                            className: "font-bold"
                        },
                        {
                            Header: "Equipamento/Software",
                            accessor: "equipamento",
                            filterable: true,
                            className: "font-bold"
                        },                        
                        {
                            Header: "Técnico",
                            accessor: "tecnico",
                            filterable: true,
                            className: "font-bold"
                        },                        
                        {
                            Header: "Data Criação",
                            accessor: "datacriacao",
                            filterable: true,
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
