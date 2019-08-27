import React from 'react';
import {Redirect} from 'react-router-dom';

export const OrgaoConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/orgao',
            component: React.lazy(() => import('../orgao/Orgao'))
        },
        {
            path     : '/Orgaos',
            component: React.lazy(() => import('../orgao/Orgaos'))
        },
        {
            path     : '/',
            component: () => <Redirect to="/orgao"/>
        }
    ]
};
