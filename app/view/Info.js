Ext.define('LearningJourney.view.Info',
{
    extend:'Ext.Panel',
    xtype:'infoMenu',
    
    
    config:{
        title:'Help and Information',
        showAnimation:{type:'fadeIn',duration:500},
        html:[
            '<a href="http://www.google.com" target="_blank">Example link to external webpage</a>'
        ]
        
    }
});