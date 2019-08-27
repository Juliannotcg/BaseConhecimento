import React, {useEffect, useState} from 'react';
import {Icon, Table, TableBody, TableCell, TablePagination, TableRow} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import {withRouter} from 'react-router-dom';
import _ from '@lodash';
import OrgaosTableHead from './OrgaosTableHead';
import * as Actions from '../orgao/store/actions';
import {useDispatch, useSelector} from 'react-redux';

function ProductsTable(props)
{
    const dispatch = useDispatch();
    const orgaos = useSelector(({orgaoApp}) => orgaoApp.orgaos.data);
    const searchText = useSelector(({orgaoApp}) => orgaoApp.orgaos.searchText);

    const [selected, setSelected] = useState([]);
    const [data, setData] = useState(orgaos);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState({
        direction: 'asc',
        id       : null
    });

    useEffect(() => {
        dispatch(Actions.getOrgaos());
    }, [dispatch]);

    useEffect(() => {
        setData(searchText.length === 0 ? orgaos : _.filter(orgaos, item => item.nome.toLowerCase().includes(searchText.toLowerCase())))
    }, [orgaos, searchText]);

    function handleRequestSort(event, property)
    {
        const id = property;
        let direction = 'desc';

        if ( order.id === property && order.direction === 'desc' )
        {
            direction = 'asc';
        }

        setOrder({
            direction,
            id
        });
    }

    function handleSelectAllClick(event)
    {
        if ( event.target.checked )
        {
            setSelected(data.map(n => n.id));
            return;
        }
        setSelected([]);
    }

    function handleClick(item)
    {
        props.history.push('/apps/e-commerce/products/' + item.id + '/' + item.handle);
    }

    function handleChangePage(event, page)
    {
        setPage(page);
    }

    function handleChangeRowsPerPage(event)
    {
        setRowsPerPage(event.target.value);
    }

    return (
        <div className="w-full flex flex-col">

            <FuseScrollbars className="flex-grow overflow-x-auto">

                <Table className="min-w-xl" aria-labelledby="tableTitle">

                    <OrgaosTableHead
                        numSelected={selected.length}
                        order={order}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={data.length}
                    />

                    <TableBody>
                        {_.orderBy(data, [
                            (o) => {
                                switch ( order.id )
                                {
                                    case 'categories':
                                    {
                                        return o.categories[0];
                                    }
                                    default:
                                    {
                                        return o[order.id];
                                    }
                                }
                            }
                        ], [order.direction])
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(n => {
                                const isSelected = selected.indexOf(n.id) !== -1;
                                return (
                                    <TableRow
                                        className="h-64 cursor-pointer"
                                        hover
                                        role="checkbox"
                                        aria-checked={isSelected}
                                        tabIndex={-1}
                                        key={n.id}
                                        selected={isSelected}
                                        onClick={event => handleClick(n)}
                                    >

                                        <TableCell component="th" scope="row">
                                            {n.nome}
                                        </TableCell>

                                        <TableCell className="truncate" component="th" scope="row">
                                            {n.descricao}
                                        </TableCell>

                                        <TableCell component="th" scope="row" align="right">
                                            {
                                                (
                                                    <Icon className="text-red text-20">remove_circle</Icon>
                                                )
                                            }
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </FuseScrollbars>

            <TablePagination
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page'
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page'
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default withRouter(ProductsTable);
