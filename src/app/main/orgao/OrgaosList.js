import React, {useEffect, useState} from 'react';
import {Avatar, Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import ReactTable from "react-table";

function OrgaosList(props)
{

    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        const data = [{
            "id": "01",
            "nome": "Julianno",
            "descricao": "Teste"
        },
        {
            "id": "02",
            "nome": "Net0",
            "descricao": "Teste"
        }]
        
        setFilteredData(data);
      }, []);


    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no contacts!
                </Typography>
            </div>
        );
    }

    return (
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
                        Header    : "Nome",
                        accessor  : "nome",
                        filterable: true,
                        className : "font-bold"
                    },
                    {
                        Header    : "Descrção",
                        accessor  : "descricao",
                        filterable: true,
                        className : "font-bold"
                    },
                    {
                        Header: "",
                        width : 128,
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                  
                                >
                                 
                                        <Icon>star</Icon>
                                    
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
    );
}

export default OrgaosList;