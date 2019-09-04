import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import { OrgaoConfig } from 'app/main/orgao/OrgaoConfig';
import { TecnicoConfig } from 'app/main/tecnico/TecnicoConfig';
import { PesquisaConfig } from 'app/main/pesquisa/PesquisaConfig';
import { LoginConfig } from 'app/main/login/LoginConfig';
import { IncidenteConfig } from 'app/main/incidente/IncidenteConfig';

const routeConfigs = [
    OrgaoConfig,
    TecnicoConfig,
    PesquisaConfig,
    LoginConfig,
    IncidenteConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/login"/>
    }
];

export default routes;
