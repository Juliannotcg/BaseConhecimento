import React from 'react';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';
import OrgaosTable from './OrgaosTable';
import OrgaosHeader from './OrgaosHeader';
import reducer from '../orgao/store/reducers';

function Orgaos()
{
    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <OrgaosHeader/>
            }
            content={
                <OrgaosTable/>
            }
            innerScroll
        />
    );
}

export default withReducer('orgaoApp', reducer)(Orgaos);
