const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Pesquisa',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'pesquisa-component',
                'title': 'Pesquisa',
                'type' : 'item',
                'icon' : 'search',
                'url'  : '/pesquisa'
            }
                   ]
    },
    {
        'id'      : 'cadastros',
        'title'   : 'Cadastro',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'dashboards',
                'title'   : 'Base de conhecimento',
                'type'    : 'collapse',
                'icon'    : 'class',
                'children': [
                    {
                        'id'   : 'analytics-dashboard',
                        'title': 'Erro',
                        'type' : 'item',
                        'icon' : 'bug_report',
                        'url'  : '/apps/dashboards/analytics'
                    },
                    {
                        'id'   : 'project-dashboard',
                        'title': 'Solução',
                        'type' : 'item',
                        'icon' : 'check',
                        'url'  : '/apps/dashboards/project'
                    }
                ]
            },
            {
                'id'   : 'orgao-component',
                'title': 'Orgãos',
                'type' : 'item',
                'icon' : 'location_city',
                'url'  : '/orgao'
            },
            {
                'id'   : 'tecnicos-component',
                'title': 'Técnicos',
                'type' : 'item',
                'icon' : 'group',
                'url'  : '/orgao'
            }
        ]
    }
];

export default navigationConfig;
