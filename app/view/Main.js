Ext.define('LearningJourney.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
    'LearningJourney.view.Menu'   
    ],
    config: {
        layout:'card',
        navigationBar: {
            items: [
                
                {
                    xtype: 'button',
                    id: 'infoButton',
                    iconCls: 'info',
                    iconMask: false,
                    padding:0,
                    width:30,
                    height:20,
                    iconAlign:'center',
                    align: 'right',
                    hidden: false
                }
            ]
        },
        items:[            
            {
                xtype:'menuPanel'
            }
        ]
    }
});
