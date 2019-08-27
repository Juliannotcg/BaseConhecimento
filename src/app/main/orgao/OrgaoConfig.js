import React from 'react';
import {Redirect} from 'react-router-dom';

export const OrgaoConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/orgao',
            component: React.lazy(() => import('./Orgaos'))
        },
        {
            path     : '/orgao',
            component: () => <Redirect to="/Orgaos"/>
        }
    ]
};
