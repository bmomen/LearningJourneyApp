Ext.define('LearningJourney.view.Menu',
{
    extend:'Ext.Container',
    xtype:'menuPanel',
    config:{
        title:'Learning Journey',
        layout:'fit',        
        items:[
            {
                docked:'top',
                html:'<div class="menuInfo"><p>Welcome to Learning Journey. Tap a section to get started!</p>'
            },
            {
                xtype:'dataview',
                store:'MenuStore',
                itemTpl:'<div class="menuData {panelColour}"><h1>{panelTitle}</h1><br> {panelDesc}'
            }
        ]
    }
    
}
);