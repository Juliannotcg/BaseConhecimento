export const fuseNavigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Aplicações',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'all-forms',
                'title': 'Base de conhecimento',
                'type' : 'item',
                'icon' : 'assessment',
                'url'  : '/baseconhecimento',
            },
            {
                'id'   : 'example-component',
                'title': 'Erro',
                'type' : 'item',
                'icon' : 'bug_report',
                'url'  : '/example'
            },
            {
                'id'   : 'all-forms',
                'title': 'Orgão',
                'type' : 'item',
                'icon' : 'account_balance',
                'url'  : '/orgao',
            }
        ]
    },
    {
        'id'      : 'formBuilder',
        'title'   : 'Relatórios',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'add-form',
                'title': 'Relatório de contribuição',
                'type' : 'item',
                'icon' : 'note_add',
                'url'  : '/form-builder/add-form',
            }
        ]
    }
];