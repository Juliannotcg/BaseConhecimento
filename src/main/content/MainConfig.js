import FormBuilder from './FormBuilder/FormBuilder';
import Example from './example/Example';
//import BaseConhecimento from './base-conhecimento/BaseConhecimento';
import OrgaoPage from './orgao/OrgaoPage';

export const MainConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: Example
        },
        // {
        //     path     : '/baseconhecimento',
        //     component: BaseConhecimento
        // },
        {
            path     : '/orgao',
            component: OrgaoPage
        }
    ]
};
