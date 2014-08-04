Ext.define('LearningJourney.view.Life',{
    extend:'Ext.Panel',
    xtype:'life',
    config:{
            title:'Life at Dundee',
            layout:'card',
            showAnimation:{type:'fadeIn',duration:500},
            items:[
                {
                docked:'top',
                html:'<div class="menuInfo"><p>Dundee University has many services to help students during their time studying. Tap a section\n\
                      to find out more!</p>'
                },
                {
                    xtype:'dataview',
                    store:'LifeStore',
                    itemTpl:'<div class="lifeMenuCls"><h1>{lifeMenuTitle}</h1>{lifeMenuDesc}'
                }
            ]
            }
});