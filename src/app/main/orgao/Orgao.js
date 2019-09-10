import React, { useState, useEffect } from 'react';
import { FusePageCarded } from '@fuse';
import OrgaoHeader from './OrgaoHeader';
import OrgaoDialog from './OrgaoDialog';
import OrgaosList from './OrgaosList';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import * as Actions from './store/actions/orgao.actions'
import { useDispatch, useSelector } from 'react-redux';


function Orgao(props) {

    const dispatch = useDispatch();
    const orgao = useSelector(({ orgaoApp }) => orgaoApp.orgao);

    console.log("App", orgao);

    useEffect(() => {
        dispatch(Actions.getOrgaos());
    }, [dispatch]);

    return (
        <React.Fragment>
            <FusePageCarded
                header={
                    <OrgaoHeader />
                }
                content={
                    orgao.data && <OrgaosList dados={orgao.data} />
                }
                innerScroll
            />
            <OrgaoDialog />
        </React.Fragment>
    );
}
export default withReducer('orgaoApp', reducer)(Orgao);


