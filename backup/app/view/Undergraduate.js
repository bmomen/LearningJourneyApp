Ext.define('LearningJourney.view.Undergraduate',{
    extend:'Ext.Panel',
    xtype:'undergraduate',           
    config:{
            title:'Undergraduate Courses',
            layout:'card',
            items:[
                {
                    fullscreen:'true',
                    xtype:'list',
                    store:'UndergraduateStore',
                    itemTpl:'<h1>{courseName}</h1>',
                    grouped:true
                }
            ]
            }
});