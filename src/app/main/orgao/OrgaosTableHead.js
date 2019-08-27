import React, {useState} from 'react';
import {TableHead, TableSortLabel, TableCell, TableRow, Checkbox, Tooltip, IconButton, Icon, Menu, MenuList, MenuItem, ListItemIcon, ListItemText,} from '@material-ui/core';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

const rows = [
      {
        id            : 'nome',
        align         : 'left',
        disablePadding: false,
        label         : 'Nome',
        sort          : true
    },
    {
        id            : 'descricao',
        align         : 'left',
        disablePadding: false,
        label         : 'Descrição',
        sort          : true
    }
];

const useStyles = makeStyles(theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
}));

function OrgaosTableHead(props)
{
    const classes = useStyles(props);
    const [selectedProductsMenu, setSelectedProductsMenu] = useState(null);

    const createSortHandler = property => event => {
        props.onRequestSort(event, property);
    };

    function openSelectedProductsMenu(event)
    {
        setSelectedProductsMenu(event.currentTarget);
    }

    function closeSelectedProductsMenu()
    {
        setSelectedProductsMenu(null);
    }

    return (
        <TableHead>
            <TableRow className="h-64">
                {rows.map(row => {
                    return (
                        <TableCell
                            key={row.id}
                            align={row.align}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={props.order.id === row.id ? props.order.direction : false}
                        >
                            {row.sort && (
                                <Tooltip
                                    title="Sort"
                                    placement={row.align === "right" ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={props.order.id === row.id}
                                        direction={props.order.direction}
                                        onClick={createSortHandler(row.id)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            )}
                        </TableCell>
                    );
                }, this)}
            </TableRow>
        </TableHead>
    );
}

export default OrgaosTableHead;
