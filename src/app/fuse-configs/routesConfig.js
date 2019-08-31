import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import { OrgaoConfig } from 'app/main/orgao/OrgaoConfig';
import { PesquisaConfig } from 'app/main/pesquisa/PesquisaConfig';

const routeConfigs = [
    ExampleConfig,
    OrgaoConfig,
    PesquisaConfig

];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    }
];

export default routes;
