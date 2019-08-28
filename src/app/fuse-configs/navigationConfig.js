const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component',
                'title': 'Example',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/example'
            },
            {
                'id'   : 'orgao-component',
                'title': 'Orgão',
                'type' : 'item',
                'icon' : 'location_city',
                'url'  : '/orgao'
            }
        ]
    }
];

export default navigationConfig;
