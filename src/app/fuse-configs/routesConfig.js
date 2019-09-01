import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import { OrgaoConfig } from 'app/main/orgao/OrgaoConfig';
import { TecnicoConfig } from 'app/main/tecnico/TecnicoConfig';
import { PesquisaConfig } from 'app/main/pesquisa/PesquisaConfig';

const routeConfigs = [
    OrgaoConfig,
    TecnicoConfig,
    PesquisaConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/pesquisa"/>
    }
];

export default routes;
