Ext.define('LearningJourney.view.Articulation',
        {
            extend:'Ext.Panel',
            xtype:'articulation',           
            config:{
                title:'Articulation',
                showAnimation:{type:'fadeIn',duration:500},
                layout:'vbox',
                items:[
                    {
                        xtype:'dataview',
                        store:'ArticulationStore',
                        itemTpl:'<div class="articulationCls"><h1>{schemeName}</h1>{schemeInfo}',
                        flex:5
                    },
                    
                    {
                        xtype:'dataview',
                        store:'ArticulationStore',
                        itemTpl:'<div class="articulationCls"><h1>{schemeName}</h1>{schemeInfo}',
                        flex:1,
                        scrollable: 'horizontal',
                        inline: {
                            wrap: false
                        }
                    }
                         
                ]
            }
        }
);