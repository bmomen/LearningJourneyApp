Ext.define('LearningJourney.view.Menu',
{
    extend:'Ext.Container',
    xtype:'menuPanel',
    config:{
        title:'Learning Journey',
        layout:'card',        
        items:[
            
            {
                xtype:'dataview',
                store:'MenuStore',
                itemTpl:'<div class="menuData {panelColour}"><h1>{panelTitle}</h1><br> {panelDesc}'
            }
        ]
    }
    
}
);