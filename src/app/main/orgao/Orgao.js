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
    const orgao = useSelector(({orgaoApp}) => orgaoApp.orgao);

    useEffect(() => {
        dispatch(Actions.getOrgao());
    }, [dispatch]);

    console.log(orgao);

    return (
        <div>
        <FusePageCarded
            header={
                <OrgaoHeader />
            }
            content={
                orgao.data &&  <OrgaosList dados={orgao.data}/>
            }
            innerScroll
        />
         {orgao.rowEdit && <OrgaoDialog />}
        </div>
    );
}
export default withReducer('orgaoApp', reducer)(Orgao);


